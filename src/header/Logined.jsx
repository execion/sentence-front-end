import React from 'react'
import styled from 'styled-components';

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

const Logined = ({username}) => {
    return (
        <>
            <User>{`${username}`}</User>
        </>
    );
}

export default Logined;