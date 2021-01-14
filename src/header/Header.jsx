import React from 'react'
import { connect } from 'react-redux';
import './css/Header.css';
import Logined from './Logined';
import NoLogined from './NoLogined';

const Header = ({logined, username}) => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./img/logo.png" alt="logo"/>
            </div>

            <div className="nav">
                {
                    logined? <Logined username={username}/> : <NoLogined />
                }
                
            </div>
        </header>
    );
}

const mapStateToProps = ({loginState}) => {
    console.log(loginState)
    return {
        logined: loginState.loading,
        username: loginState.username
    }
}
export default connect(mapStateToProps, undefined)(Header);