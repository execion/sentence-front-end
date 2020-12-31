import React, { useEffect } from "react";
import { connect } from "react-redux";
import { typesGame } from "../redux/actions";
import AudioButton from "./AudioButton";
import ButtonList from "./ButtonList";
import Counter from "./Counter";
import './Game.css';

const Game = ({
    insertSentence,
    alternateLetter,
    loaded,
    sentences,
    question,
    answer,
    index,
    init,
    countCorrect,
    count,
    countIncorrect
}) => {

    

    useEffect(() => {
        if (init) {
            //Si el fetch en sentenceReducer está completo
            insertSentence(sentences[index % sentences.length].sentence); //Carga la oración en gameState   
            console.log(sentences[index % sentences.length].sentence)
        }

    }, [init, sentences, index, insertSentence]);

    if (loaded) {
        //Si la oración esta cargada en gameState, comienza.
        return (
            <div className="container">  
                <Counter count={count} countCorrect={countCorrect} countIncorrect={countIncorrect} />
                <AudioButton id={sentences[index % sentences.length].id}/>

                <div className="answer">
                    <ButtonList WordList={answer} AlternateLetter={alternateLetter} Types={typesGame.ANSWER}/>
                </div>

                <div className="question">
                    <ButtonList WordList={question} AlternateLetter={alternateLetter} Types={typesGame.QUESTION}/>
                </div>
            </div>
        );
    } else {
        return <div>Loading....</div>;
    }
};

const mapStateToProps = ({ gameState, sentenceState }) => {
    return {
        sentences: sentenceState.sentences,
        question: gameState.question,
        answer: gameState.answer,
        loaded: gameState.loaded,
        index: gameState.index,
        init: !sentenceState.loading,
        countCorrect: gameState.countCorrect,
        countIncorrect: gameState.countIncorrect,
        count: gameState.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        insertSentence: (sentence) =>
            dispatch({
                type: typesGame.INSERT_SENTENCES,
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
