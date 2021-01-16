import React from 'react'
import styled from 'styled-components';

const Word = styled.button`
    display: inline-block;
    background-color: white;
    border: .12rem solid rgba(40,40,40,.9);
    margin-top: 1rem;
    margin-right: 1rem;
    padding: .3rem 1rem;
    color: rgba(40,40,40,.9);
    font-size: 1.2rem;
    border-radius: .4rem;

    :last-of-type {
        margin-right: 0;
    }
    :hover {
        color: white;
        background-color: rgba(40,40,40,.9);
    }
`;

const Button = ({letter, type, change}) => {
    return(
        <Word
            id={letter.id}
            onClick={ e => change(e.target.id, type)}
        >
            {letter.letter}
        </Word>
    );
}

export default Button;