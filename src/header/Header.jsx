import React from 'react'
import './css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./img/logo.png" alt="logo"/>
            </div>

            <div className="nav">
                <button className="button-signup">Sign-up</button>
                <button className="button-login">Login</button>
            </div>
        </header>
    );
}

export default Header;