import React from 'react';
import s from './Footer.module.css'
import srcLogo from '../public/images/a21cf0e37634bf7f262554f86388e0d5.png';

const Footer = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={srcLogo} ali='logo' />
        </header>
    );
};

export default Footer;