import { shuffle } from "shufflr";
import { typeLogin } from '../login/actions';

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
    console.log(getPassport);
    const response = await fetch("http://localhost:8000/api/sentences", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(getPassport)
    });
    const data = await response.json();

    console.log(data);

    if(typeof(data) === 'boolean') {
        dispatch({type: typeLogin.SET_PASSPORT, payload: data});
    } else {
        dispatch({ type: typeSentence.GET_SENTENCES, payload: shuffle(data)});
    }
};