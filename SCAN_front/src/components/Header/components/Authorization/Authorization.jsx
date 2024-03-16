import React from 'react';
import s from './Authorization.module.css'
import { Link } from 'react-router-dom';

const Authorization = ({className}) => {
    return (
        <div className={s.login_unit + ' ' + className}>
            <div className={s.button_registratiom}>Зарегистрироваться </div>
            <div className={s.rectangle}></div>
            <Link to='/authorization'><button className={s.button_login}>Войти</button></Link>
        </div>
    );
};

export default Authorization;