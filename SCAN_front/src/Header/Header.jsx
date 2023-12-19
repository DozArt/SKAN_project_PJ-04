import React from 'react';
import s from './Header.module.css'
import srcLogo from '../images/a21cf0e37634bf7f262554f86388e0d5.png';
import Card from './Components/Card/Card';
import Limit from './Components/Limit/Limit';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={srcLogo} ali='logo' />
            <div className={s.group_menu}>
                <div className={s.item_menu}>Главная</div>
                <div className={s.item_menu}>Тарифы</div>
                <div className={s.item_menu}>FAQ</div>
            </div>
            <Limit className={s.limit_section} />
            <Card className={s.card} />
        </header>
    );
};

export default Header;