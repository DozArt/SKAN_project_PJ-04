import React from 'react';
import s from './Authorization.module.css';
import imageKeyMascot from '../../public/images/key_mascot.svg';
import FormAuthorization from './FormAuthorization';

const Authorization = () => {
    return (
        <div className={s.unit}>
            
            <h3 className={s.title}>Для оформления подписки на тариф, необходимо авторизоваться.</h3>
            <div className={s.form} >
                <FormAuthorization />
            </div>
            <img className={s.mascot} src={imageKeyMascot} />
            
        </div>
    );
};

export default Authorization;

