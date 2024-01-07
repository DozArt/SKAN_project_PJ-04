import React, { useState, useEffect } from 'react';
import s from './FormAuthorization.module.css';
import img_look from './images/Group 1171274237.svg'
import Button from '../../../components/Button/Button';
import LoginSocial from './LoginSocial/LoginSocial';
import { Link } from 'react-router-dom';

const FormAuthorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDitry, setLoginDitry] = useState(false)
    const [passwordDitry, setPasswordDitry] = useState(false)
    const [loginError, setLoginError] = useState('Введите корректные данные')
    const [passwordError, setPasswordError] = useState('Неправильный пароль')
    const [validation, setValidation] = useState(false)

    useEffect(() => {
        if ((loginError || passwordError)) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [loginError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDitry(true)
                break
            case 'password':
                setPasswordDitry(true)
                break
        }
    }

    const emailHandler = (e) => {
        setLogin(e.target.value)
        const re_name =  /^[a-z0-9_\.]+$/

        if (re_name.test(String(e.target.value).toLowerCase())) {
            setLoginError('')
        } else {
            setLoginError('Введите корректные данные')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 5) {
            setPasswordError('Неправильный пароль')
        } else {
            setPasswordError('')
        }
    }


    return (
        <div className={s.unit}>
            <div className={s.form}>
                <div className={s.navigation}>
                    <Link to='/authorization' className={s.link_login + ' ' + s.select}><div>Войти</div></Link>
                    <Link to='/registration' className={s.link_registration}><div>Зарегистрироваться</div></Link>
                </div>
                <div className={s.form_authorization}>
                    <h4>Логин или номер телефона:</h4>
                    <input 
                        onBlur={e => blurHandler(e)}
                        onChange={e => emailHandler(e)}
                        name='login'
                        value={login}
                        type='text'
                        placeholder='Логин'
                    />
                    {(loginDitry && loginError) && <div>{loginError}</div>}
                    <h4>Пароль:</h4>
                    <input 
                        onBlur={e => blurHandler(e)}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        value={password}
                        type='password'
                        placeholder='Пароль'
                    />
                    {(passwordDitry && passwordError) && <div>{passwordError}</div>}
                    <button
                        onClick={() => console.log(login)}
                        className={s.login_button}
                        disabled={!validation}
                    >Войти</button>
                    <a href=''>восстановить пароль</a>
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

