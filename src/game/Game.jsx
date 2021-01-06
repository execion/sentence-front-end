import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { typeGame } from "./actions";
import AudioButton from "./AudioButton";
import ButtonList from "./ButtonList";
import Counter from "./Counter";
import './css/Game.css';
import { gameReducer } from "./gameReducer";
import { defaultState } from "./state";
import { insertSentence, stateToCounter, sentenceId } from './helper';

const Game = ({sentence}) => {
    const [state, dispatch] = useReducer(gameReducer, defaultState);

    const alternateLetter = (id, type) => dispatch(
        {
            type: type,
            payload: id,
        }
    );

    useEffect(() => {
        insertSentence(sentence, state, dispatch); //Carga la oración en el state
        // eslint-disable-next-line
    }, [state.index, sentence.init]);

    if (state.loaded) {
        //Si la oración esta cargada en el state, comienza.
        return (
            <div className="container">  
                <Counter count={stateToCounter(state)} />
                <AudioButton id={sentenceId(sentence, state)}/>

                <div className="answer">
                    <ButtonList WordList={state.answer} AlternateLetter={alternateLetter} Types={typeGame.ANSWER}/>
                </div>

                <div className="question">
                    <ButtonList WordList={state.question} AlternateLetter={alternateLetter} Types={typeGame.QUESTION}/>
                </div>
            </div>
        );
    } else {
        return <div>Loading....</div>;
    }
};

const mapStateToProps = ( { sentenceState } ) => {
    return {
        sentence: {
            sentences: sentenceState.sentences,
            init: !sentenceState.loading,
        }
    };
};

export default connect(mapStateToProps, undefined)(Game);
