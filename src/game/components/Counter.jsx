import React from 'react'
import './Counter.css';

const Counter = ({countCorrect, countIncorrect, count}) => {
    return (
        <div className="counter">
            <p>Correct: {countCorrect}</p>
            <p>Incorrect: {countIncorrect}</p>
            <p>Count: {count}</p>
        </div>
    );
}

export default Counter;