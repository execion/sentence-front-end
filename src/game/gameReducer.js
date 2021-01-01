import { typeGame } from "./actions";
import { v4 as uuidv4 } from "uuid";
import { shuffle } from "shufflr";
/* --------------------------------------------------   State   -------------------------------------------------- */

const defaultState = {
    loaded: false,
    index: 0,
    question: [],
    answer: [],
    answerCorrect: "",
    countCorrect: 0,
    countIncorrect: 0,
    count: 0
};

/* --------------------------------------------------   Reducer   -------------------------------------------------- */

export const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case typeGame.INSERT_SENTENCES:
            return createSentenceList(state, action);
        case typeGame.QUESTION:
            return questionLetters(state, action.payload);
        case typeGame.ANSWER:
            return answerLetters(state, action.payload);
        default:
            return state;
    }
};

/* --------------------------------------------------   Functions   -------------------------------------------------- */

function createSentenceList(state, action) {
    //Pasa la oración recibida a una lista en el state.
    const tempSentence = action.payload.split(" ");
    let tempList = [];

    for (let i of tempSentence) {
        tempList.push({
            id: uuidv4(),
            letter: i,
        });
    }

    tempList = shuffle(tempList); //Desordena la lista

    return {
        ...state,
        loaded: true,
        question: tempList,
        answerCorrect: action.payload
    };
}

function questionLetters(state, payload) {
    //Mueve la letra de la lista question a answer en el state.
    let temp = state.question.filter((item) => item.id === payload);
    let answerTemp = state.answer.concat(temp);
    let questionTemp = state.question.filter((item) => item.id !== payload);

    if(questionTemp.length === 0) {
        temp = answerTemp.map( (item) => item.letter).join(" ");
        if(temp === state.answerCorrect) {
            return {
                ...state,
                question: [],
                answer: [],
                countCorrect: state.countCorrect + 1,
                index: state.index + 1,
                count: state.count + 1
            }
        } else {
            return {
                ...state,
                question: [],
                answer: [],
                countIncorrect: state.countIncorrect + 1,
                index: state.index + 1,
                count: state.count + 1
            }
        }
    } 
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
