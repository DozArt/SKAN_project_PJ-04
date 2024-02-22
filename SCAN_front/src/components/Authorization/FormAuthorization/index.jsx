import React, { useState, useEffect, useContext } from 'react';
import s from './FormAuthorization.module.css';
import img_look from './images/Group 1171274237.svg'
import LoginSocial from 'comp/LoginSocial';
import { Link } from 'react-router-dom';
import { Context } from '@/main';
import Button from '../../Button';
import Test from '../../../public/images/test_form.png';
import InputText from '../../InputText';

const FormAuthorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('Введите корректные данные')
    const [passwordError, setPasswordError] = useState('Неправильный пароль')
    const [validation, setValidation] = useState(false)

    const{store} = useContext(Context);

    useEffect(() => {
        if ((loginError || passwordError)) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [loginError, passwordError])

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

                    <InputText  label='Логин или номер телефона:'
                                name='login' 
                                value={login}
                                errorMesage={loginError}
                                onChange={e => emailHandler(e)
                    }/>

                    <InputText  label='Пароль:'
                                typePass='true'
                                name='password' 
                                value={password}
                                errorMesage={passwordError}
                                onChange={e => passwordHandler(e)
                    }/>
                    <Button onClick={() => store.handleLogin(login, password)}
                            className={s.button}
                            disabled={!validation}>
                        Войти
                    </Button>
                    
                    <a href=''>Восстановить пароль</a>
                </div>
                <LoginSocial />
            </div>
            
            <img className={s.look} src={img_look} />
        </div>
    );
};

export default FormAuthorization;

