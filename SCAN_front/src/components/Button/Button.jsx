import React from 'react';
import s from './Button.module.css'

const Button = ({className, children, disabled = false}) => {

    return (
        <button className={className + ' ' + s.button} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;