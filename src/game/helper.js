// eslint-disable-next-line
import { typeGame } from "./actions";

export const stateToCounter = (state) => {
    return {
        count: state.count, 
        correct: state.countCorrect, 
        incorrect: state.countIncorrect
    }
}

export const sentenceId = (sentence, state) => {
    return sentence[state.index % sentence.length].id;
}

export const sendScore = async(answerUser, Sentence, dispatch) => {
    const scoreObject = {
        id: Sentence.id,
        answerUser: answerUser,
        answerCorrect: Sentence.sentence
    }
    // eslint-disable-next-line
    const response = await fetch("http://192.168.0.190:8000/score", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(scoreObject)
    });

    const data = await response.json();
    if(typeof data.result === "boolean") {
        dispatch({type: typeGame.SET_SCORE, payload: data.result})
    }
}