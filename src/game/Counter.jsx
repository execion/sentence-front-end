import React from 'react'
import './css/Counter.css';

const Counter = ({count}) => {
    return (
        <div className="counter">
            <p>Correct: {count.correct}</p>
            <p>Incorrect: {count.incorrect}</p>
            <p>Count: {count.count}</p>
        </div>
    );
}

export default Counter;