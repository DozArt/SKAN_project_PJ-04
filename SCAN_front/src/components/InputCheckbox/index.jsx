import React from 'react'
import s from './style.module.css'

const Input = ({description, name, defaultChecked, disabled = false, onClick}) => {

    return (
        <div className={s.unit}>
            <input  className={s.check}
                    onClick={onClick}
                    type='checkbox' 
                    name={name}
                    id={name}
                    defaultChecked = {defaultChecked} />
            <label htmlFor={name} className={s.styled_checkbox}></label>
            <label htmlFor={name} className={s.description}>
                {description}
            </label>
        </div>
    );
};

export default Input;