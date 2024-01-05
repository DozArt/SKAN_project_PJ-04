import React from 'react';
import s from './Authorization.module.css'
import { Link } from 'react-router-dom';

const Authorization = ({className}) => {
    return (
        <div className={className}>
            Зарегистрироваться | <Link to='/authorization'>Войти</Link>
        </div>
    );
};

export default Authorization;