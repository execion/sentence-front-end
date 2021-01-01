import { shuffle } from "shufflr";

export const typeSentence = {
    SET_SENTENCES : "SET_SENTENCES",
    GET_SENTENCES : "GET_SENTENCES"
}

export const setSentences = () => {
    return {
        type: typeSentence.SET_SENTENCES
    };
};

export const getSentences = () => async ( dispatch ) => {
    dispatch(setSentences());
    const response = await fetch("http://localhost:8000/api/sentences");
    const data = await response.json();
    dispatch({ type: typeSentence.GET_SENTENCES, payload: shuffle(data)});
};