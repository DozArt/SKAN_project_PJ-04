import React from 'react';
import s from './LoginSocial.module.css';
import img_google from '../images/Group 1171274231.svg'
import img_fb from '../images/Group 1171274230.svg'
import img_ya from '../images/Group 1171274229.svg'

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

