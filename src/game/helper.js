import { typeGame } from "./actions";

export const insertSentence = (sentence, state, dispatch) => {   
    if(sentence.length > 0) {
        let payload = sentence[state.index % sentence.length].sentence;
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