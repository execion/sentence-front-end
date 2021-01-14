import React from 'react'

const Logined = ({username}) => {
    return (
        <>
            <button className="button-login">{` ${username} >`}</button>
        </>
    );
}

export default Logined;