import { typeGame } from "./actions";

export const insertSentence = (sentence, state, dispatch) => {   
    if(sentence.length > 0) {
        let payload = {
            id: sentence[state.index % sentence.length].id,
            sentence: sentence[state.index % sentence.length].sentence
        };
        return dispatch(
            {
                type: typeGame.INSERT_SENTENCES,
                payload: payload,
            }
        )
    }  
};

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

export const sendScore = async(id, score) => {
    const scoreObject = {
        id: id,
        correct: score
    }
    // eslint-disable-next-line
    const response = await fetch("http://192.168.0.190:8000/score", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(scoreObject)
    });
}