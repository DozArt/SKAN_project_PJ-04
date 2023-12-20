import React from 'react';
import s from './Button.module.css'

const Button = ({className, children}) => {

    return (
        <button className={className + ' ' + s.button}>
            {children}
        </button>
    );
};

export default Button;