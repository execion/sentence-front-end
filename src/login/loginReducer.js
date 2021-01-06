import { typeLogin } from "./actions"

const initialState = {
    passport: "passport" in localStorage? localStorage.getItem("passport") : "",
    loading: "passport" in localStorage? true : false
}

export const loginReducer = (state = initialState, action ) => {
    switch(action.type) {
        case typeLogin.SET_PASSPORT:
            return validateData(state, action);
        default: return state;
    }
};

const validateData = (state, action) => {
    console.log(action.payload);
    if(action.payload === false) {
        return state;
    } else if(action.payload.length > 4) {
        localStorage.setItem("passport", action.payload);
        return {
            ...state,
            loading: true,
            passport: action.payload
        }
    }
    return state;
}