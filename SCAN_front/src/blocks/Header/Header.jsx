import React from 'react';
import s from './Header.module.css'
import srcLogo from '../../public/images/a21cf0e37634bf7f262554f86388e0d5.png';
import Card from './Components/Card/Card';
import Limit from './Components/Limit/Limit';
import Menu from './Components/Menu/Menu';
import Authorization from './Components/Authorization/Authorization';

const Header = () => {

    return (
        <header className={s.header}>
            <img className={s.logo} src={srcLogo} ali='logo' />
            <Menu className={s.group_menu}/>
            <Authorization className={s.authorization} />
            {/* 
            <Limit className={s.limit_section} />
            <Card className={s.card} />
            */}
            
        </header>
    );
};

export default Header;