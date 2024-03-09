import React from 'react'
import s from './style.module.css'

const Input = ({description, name, defaultChecked, disabled = false, onClick}) => {

    return (
        <div>
            <input  onClick={onClick}
                    type='checkbox' 
                    name={name}
                    id={name}
                    defaultChecked = {defaultChecked} />
            <label htmlFor={name} >
                {description}
            </label>
        </div>
    );
};

export default Input;