import React, { useState } from 'react'
import styled from 'styled-components';


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const User = styled.button`
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    align-items: center;
    border: none;
    border-bottom: 1px solid rgba(19, 93, 212, 0.836);
    background-color: white;
    font-weight: 500;
    font-size: 1.2rem;
    width: 8rem;
    height: 3rem;
    color:  rgba(19, 93, 212, 0.836);
    outline: none;

    :hover{
        padding: 0 6rem;
        margin-left: -2rem;
    }
    ::after {
        content: ">";
        position: relative;
        left: 1rem;
    }
`;

const Button = styled.button`
    display: inline-block;
    outline: none;
    background-color: white;
    border: none;
`;

const Logined = ({username}) => {
    const [showMenu , setShowMenu] = useState(false);

    const ChangeValue = () => {
        setShowMenu(!showMenu);
    }

    const Logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("passport");
        window.location.reload();
    }

    return (
        <ButtonContainer>
            <User onClick={() => ChangeValue()}>{`${username}`}</User>

            {
                showMenu? 
                    <>
                        <Button>Profile</Button>
                        <Button onClick={() => Logout()}>Logout</Button>
                    </>
                    :
                    <></>
            }
            
        </ButtonContainer>
    );
}

export default Logined;