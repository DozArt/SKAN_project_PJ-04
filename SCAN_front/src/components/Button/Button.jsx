import React from 'react';
import s from './Button.module.css'

const Button = ({className, children, disabled = false, onClick}) => {

    return (
        <button 
            className={className + ' ' + s.button} 
            disabled={disabled}
            onClick={() => console.log(onClick)}
        >
            {children}
        </button>
    );
};

export default Button;