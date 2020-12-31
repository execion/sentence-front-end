import { shuffle } from "shufflr";

export const types = {
    SET_SENTENCES : "SET_SENTENCES",
    GET_SENTENCES : "GET_SENTENCES"
}
export const typesGame = {
    INSERT_SENTENCES : "INSERT_SENTENCES",
    NEXT_SENTENCES: "NEXT_SENTENCES",
    ANSWER: "ANSWER",
    QUESTION: "QUESTION"
}
export const setSentences = () => {
    return {
        type: types.SET_SENTENCES
    };
};

export const getSentences = () => async ( dispatch ) => {
    dispatch(setSentences());
    const response = await fetch("http://localhost:8000/api/sentences");
    const data = await response.json();
    dispatch({ type: types.GET_SENTENCES, payload: shuffle(data)});
};