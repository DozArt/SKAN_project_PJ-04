import React from 'react';
import s from './Footer.module.css'
import srcLogo from '../../public/images/logo_white.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div>
                <div className={s.adress}>
                    г. Москва, Цветной б-р, 40<br />
                    +7 495 771 21 11<br />
                    info@skan.ru
                </div>
                <div className={s.copyright} >
                    Copyright. 2022
                </div>
            </div>
        </footer>
    );
};

export default Footer;