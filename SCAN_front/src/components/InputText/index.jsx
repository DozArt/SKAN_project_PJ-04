import React, { useState } from 'react';
import s from './style.module.css'

const InputText = ({label, type, typePass = false, name, onBlur, onChange, value, defaultValue, errorMesage, placeholder}) => {

    const [ditry, setDitry] = useState(false)


    const blurHandler = (e) => {
        setDitry(true)
    }

    let inputType = 'text'

    switch (type) {
        case 'password':
            inputType = 'password'
            break
        case 'number':
            inputType = 'number'
            break
        case 'date':
            inputType = 'date'
            break
    }
    
        // state ошибки?
    return (
        <div className={(ditry && errorMesage) ? s.error_designation : s.unit}>
            <label htmlFor={name} >
                {label}
            </label>
            <input 
                onBlur={e => blurHandler(e)}
                onChange={onChange}
                name={name}
                // value={value}
                defaultValue={defaultValue}
                type = {inputType}
                id={name}
                placeholder={placeholder}
            />
            {ditry && <div className={s.error_state}>{errorMesage}</div>}
        </div>
    );
};

export default InputText;