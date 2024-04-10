import React, { useState, useEffect, useContext } from 'react';
import s from './FormAuthorization.module.css';
import img_look from './images/Group 1171274237.svg'
import LoginSocial from 'comp/LoginSocial';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '@/main';
import Button from '../../Button';
import InputText from '../../InputText';
import { observer } from "mobx-react-lite";

const FormAuthorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('Введите корректные данные')
    const [passwordError, setPasswordError] = useState('Неправильный пароль')
    const [validation, setValidation] = useState(false)
    const [loginAttemptError, setLoginAttemptError] = useState('');

    const{store} = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        if ((loginError || passwordError || loginAttemptError)) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [loginError, passwordError, loginAttemptError])

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
            setLoginAttemptError('');
        }
    }

    const handleLogin = async (login, password) => {
        try {
            await store.handleLogin(login, password);
            if (store.isAuth) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error during login in form:', error);
            setLoginAttemptError('Неправильный логин или пароль');
        }
    };



    return (
        <div className={s.unit}>
            <img className={s.look} src={img_look} />

            <div className={s.form}>
                <div className={s.navigation}>
                    <Link to='/authorization' className={s.link_login + ' ' + s.select}><div>Войти</div></Link>
                    <Link to='/registration' className={s.link_registration}><div>Зарегистрироваться</div></Link>
                </div>
                <div className={s.form_authorization}>

                    <InputText  label='Логин или номер телефона:'
                                name='login' 
                                value={login}
                                errorMesage={loginError}
                                onChange={e => emailHandler(e)
                    }/>

                    <InputText  label='Пароль:'
                                typePass='true'
                                name='password'
                                type='password'
                                value={password}
                                errorMesage={passwordError || loginAttemptError}
                                onChange={e => passwordHandler(e)
                    }/>
                    <Button onClick={() => handleLogin(login, password, '/')}
                            className={s.button}
                            disabled={!validation}>
                        Войти
                    </Button>
                    
                    <a href=''>Восстановить пароль</a>
                </div>
                <LoginSocial />
            </div>
        </div>
    );
};

export default observer(FormAuthorization);

