import React from 'react'
import { Link } from 'react-router-dom';

const NoLogined = () => {
    return (
        <>
            <Link to="/">
                <button className="button-login">Login</button>
            </Link>
            <Link to="/signup">
                <button className="button-signup">Sign-up</button>
            </Link>
        </>
    );
}

export default NoLogined;