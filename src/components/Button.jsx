import React from 'react'
import './css/Button.css';

const Button = ({letter, type, change}) => {
    return(
        <button
            className="button"
            id={letter.id}
            onClick={ e => change(e.target.id, type)}
        >
            {letter.letter}
        </button>
    );
}

export default Button;