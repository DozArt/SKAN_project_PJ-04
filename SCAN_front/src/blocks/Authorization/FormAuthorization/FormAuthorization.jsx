import React from 'react';
import s from './FormAuthorization.module.css';
import img_look from './images/Group 1171274237.svg'
import Button from '../../../components/Button/Button';
import LoginSocial from './LoginSocial/LoginSocial';

const FormAuthorization = () => {
    return (
        <div className={s.unit}>
            <div className={s.form}>
                <div className={s.navigation}>
                    <button className={s.link_login + ' ' + s.select}>Войти</button>
                    <button className={s.link_registration}>Зарегистрироваться</button>
                </div>
                <div className={s.form_authorization}>
                    <h4>Логин или номер телефона:</h4>
                    <input />
                    <h4>Пароль:</h4>
                    <input />
                    <Button className={s.login_button} disabled={true} >Войти</Button>
                    восстановить пароль
                </div>
                <LoginSocial />
                <div className={s.form_registration}>

                </div>
            </div>
            
            <img className={s.look} src={img_look} />
            
        </div>
    );
};

export default FormAuthorization;

