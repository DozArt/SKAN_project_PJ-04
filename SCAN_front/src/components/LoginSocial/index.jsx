import React from 'react';
import s from './LoginSocial.module.css';
import img_google from 'img/logo_google.svg'
import img_fb from 'img/logo_fb.svg'
import img_ya from 'img/logo_ya.svg'

const LoginSocial = () => {
    return (
        <div className={s.unit}>
            <h6>Войти через:</h6>
            <div className={s.social_links}>
                <img src={img_google} />
                <img src={img_fb} />
                <img src={img_ya} />
            </div>
        </div>
    );
};

export default LoginSocial;

