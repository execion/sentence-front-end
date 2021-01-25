import { typeGame } from "./actions";
import { v4 as uuidv4 } from "uuid";
import { shuffle } from "shufflr";
/* --------------------------------------------------   Reducer   -------------------------------------------------- */

export const gameReducer = (state, action) => {
    switch (action.type) {
        case typeGame.INSERT_SENTENCES:
            return createSentenceList(state, action);
        case typeGame.NEXT_SENTENCES:
            return nextSentences(state);
        case typeGame.QUESTION:
            return questionLetters(state, action.payload);
        case typeGame.ANSWER:
            return answerLetters(state, action.payload);
        case typeGame.SET_SCORE:
            return setScore(state, action.payload);
        default:
            return state;
    }
};

/* --------------------------------------------------   Functions   -------------------------------------------------- */

function createSentenceList(state, action) {
    //Pasa la oración recibida a una lista en el state.
    if(action.payload.length > 0) {
        let sentenceList = action.payload;
        let tempSentence = sentenceList[state.index].sentence.split(" ");
        let tempList = [];
        tempSentence = shuffle(tempSentence);
        
        for (let i of tempSentence) {
            tempList.push({
                id: uuidv4(),
                letter: i,
            });
        }
        
        return {
            ...state,
            loaded: true,
            question: tempList,
            sentence: sentenceList,
            id: action.payload.id
        };
    }
    return state;
}

function questionLetters(state, payload) {
    //Mueve la letra de la lista question a answer en el state.
    let temp = state.question.filter((item) => item.id === payload);
    let answerTemp = state.answer.concat(temp);
    let questionTemp = state.question.filter((item) => item.id !== payload);

    return {
        ...state,
        question: questionTemp,
        answer: answerTemp,
    };
}

function answerLetters(state, payload) {
    //Mueve la letra de la lista answer a question en el state.
    let temp = state.answer.filter((item) => item.id === payload);
    let questionTemp = state.question.concat(temp);
    let answerTemp = state.answer.filter((item) => item.id !== payload);

    return {
        ...state,
        answer: answerTemp,
        question: questionTemp,
    };
}

function nextSentences(state) {
    let index = state.index + 1;
    let tempSentence = state.sentence[index].sentence.split(" ");

    let tempList = [];
    tempSentence = shuffle(tempSentence);
    
    for (let i of tempSentence) {
        tempList.push({
            id: uuidv4(),
            letter: i,
        });
    }
    return {
        ...state,
        index: index,
        question: tempList,
        answer: []
    }
}

function setScore(state, payload) {
    if(payload === true) {
        return {
            ...state,
            countCorrect: state.countCorrect + 1,
            count: state.count + 1
        }
    }
    return {
        ...state,
        countIncorrect: state.countIncorrect + 1,
        count: state.count + 1
    }
}
