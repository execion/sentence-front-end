import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 20rem;
    border: 1px solid rgba(40,40,40,.9);
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const Counter = ({count}) => {
    return (
        <Div>
            <p>Correct: {count.correct}</p>
            <p>Incorrect: {count.incorrect}</p>
            <p>Count: {count.count}</p>
        </Div>
    );
}

export default Counter;