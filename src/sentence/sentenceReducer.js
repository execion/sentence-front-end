import { typeSentence } from "./actions"

const defaultState = {
    loading: false,
    sentences: [],
}

export const sentenceReducer = (state = defaultState, action ) => {
    switch(action.type) {
        case typeSentence.SET_SENTENCES:
            return { ...state, loading: true};
        case typeSentence.GET_SENTENCES:
            return { ...state, loading: false, sentences: action.payload };
        default: return state;
    }
};