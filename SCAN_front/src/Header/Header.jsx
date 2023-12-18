import React from 'react';
import srcLogo from '../images/a21cf0e37634bf7f262554f86388e0d5.png';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={srcLogo} ali='logo' />
            <div className={s.group_menu}>
                <div className={s.item_menu}>Главная</div>
                <div className={s.item_menu}>Тарифы</div>
                <div className={s.item_menu}>FAQ</div>
            </div>
            <div className={s.limit_section}>
                <div className={s.rectangle} />
                <div className={s.upper_text}>Использовано компаний</div>
                <div className={s.upper_value}>34</div>
                <div className={s.lower_text}>Лимит по компаниям</div>
                <div className={s.lower_value}>100</div>
            </div>
        </header>
    );
};

export default Header;