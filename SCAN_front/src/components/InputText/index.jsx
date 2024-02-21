import React, { useState } from 'react';
import s from './style.module.css'

const InputText = ({label, typePass = false, name, onBlur, onChange, value, errorMesage}) => {

    const [ditry, setDitry] = useState(false)

    const blurHandler = (e) => {
        setDitry(true)
    }
        // state ошибки?
    return (
        <div className={s.unit}>
            <label htmlFor={name} >
                {label}
            </label>
            <input 
                onBlur={e => blurHandler(e)}
                onChange={onChange}
                name={name}
                value={value}
                type = {typePass ? 'password' : 'text'}
                id={name}
            />
            {(ditry) && <div className={s.error_state}>{errorMesage}</div>}
        </div>
    );
};

export default InputText;