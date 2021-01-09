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
    const getPassport = {
        passport: localStorage.getItem("passport")
    }
    
    const response = await fetch("http://localhost:8000/api/sentences", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(getPassport)
    });
    const data = await response.json();

    if(typeof(data) === "object") {
        dispatch({ type: typeSentence.GET_SENTENCES, payload: shuffle(data)});
    }
};