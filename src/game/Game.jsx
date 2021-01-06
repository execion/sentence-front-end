import React, { useEffect } from "react";
import { connect } from "react-redux";
import { typeGame } from "./actions";
import AudioButton from "./AudioButton";
import ButtonList from "./ButtonList";
import Counter from "./Counter";
import './css/Game.css';

const Game = ({game, sentence, counter, insertSentence, alternateLetter}) => {
    useEffect(() => {
        if (sentence.init) {
            //Si el fetch en sentenceReducer está completo
            insertSentence(sentence.sentences[game.index % sentence.sentences.length].sentence); //Carga la oración en gameState   
            console.log(sentence.sentences[game.index % sentence.sentences.length].sentence);
        }
        // eslint-disable-next-line
    }, [game.index, sentence.init]);

    if (game.loaded) {
        //Si la oración esta cargada en gameState, comienza.
        return (
            <div className="container">  
                <Counter count={counter.count} countCorrect={counter.countCorrect} countIncorrect={counter.countIncorrect} />
                <AudioButton id={sentence.sentences[game.index % sentence.sentences.length].id}/>

                <div className="answer">
                    <ButtonList WordList={game.answer} AlternateLetter={alternateLetter} Types={typeGame.ANSWER}/>
                </div>

                <div className="question">
                    <ButtonList WordList={game.question} AlternateLetter={alternateLetter} Types={typeGame.QUESTION}/>
                </div>
            </div>
        );
    } else {
        return <div>Loading....</div>;
    }
};

const mapStateToProps = ( { gameState, sentenceState }) => {
    return {
        game: {
            question: gameState.question,
            answer: gameState.answer,
            loaded: gameState.loaded,
            index: gameState.index,
        },
        counter: {
            countCorrect: gameState.countCorrect,
            countIncorrect: gameState.countIncorrect,
            count: gameState.count
        },
        sentence: {
            sentences: sentenceState.sentences,
            init: !sentenceState.loading,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        insertSentence: (sentence) =>
            dispatch({
                type: typeGame.INSERT_SENTENCES,
                payload: sentence,
            }),
        alternateLetter: (id, type) =>
            dispatch({
                type: type,
                payload: id,
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
