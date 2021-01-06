import { typeGame } from "./actions";

export const insertSentence = (sentence, state, dispatch) => { 
    if (sentence.init) {
        let payload = sentence.sentences[state.index % sentence.sentences.length].sentence;
        console.log(payload);
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
    return sentence.sentences[state.index % sentence.sentences.length].id;
}