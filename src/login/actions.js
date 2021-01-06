
export const typeLogin = {
    SET_PASSPORT: "SET_PASSPORT"
}

export const getPassport = (user, password) => async (dispatch) => {
    const dataUser = {
        user: user,
        password: password
    }
    
    const response = await fetch('http://localhost:8000/login/access', {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();

    dispatch(
        {
            type: typeLogin.SET_PASSPORT,
            payload: data
        }
    )
}