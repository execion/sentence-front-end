import { types } from "./actions"

const defaultState = {
    loading: false,
    sentences: [],
}

export default function sentenceReducer(state = defaultState, action ) {
    switch(action.type) {
        case types.SET_SENTENCES:
            return { ...state, loading: true};
        case types.GET_SENTENCES:
            return { ...state, loading: false, sentences: action.payload };
        default: return state;
    }
}