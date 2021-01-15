import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logined from './Logined';
import NoLogined from './NoLogined';


const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    box-shadow: 0px 2px 2px rgba(37, 89, 167, 0.699);
    padding: .7rem 0;
`;

const Img = styled.img`
    width: 24rem;
    height: 6.5rem;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column: 3;
    width: 50%;
    margin: 0 auto;
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    grid-column: 2;
`;

const Header = ({logined, username}) => {
    return (
        <HeaderContainer className="header">
            <Logo>
                <Img src="./img/logo.png" alt="logo"/>
            </Logo>

            <Nav>
                {
                    logined? <Logined username={username}/> : <NoLogined />
                }
                
            </Nav>
        </HeaderContainer>
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