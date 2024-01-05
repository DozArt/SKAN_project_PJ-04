import React from 'react';
import s from './Menu.module.css'
import iconMenu from './images/group-5.svg'
import { Link } from 'react-router-dom';

const Menu = ({className}) => {
    return (
        <div className={className + ' ' + s.group_menu}>
            <Link to="/" className={s.item_menu}>Главная</Link>
            <Link to="/result"className={s.item_menu}>Тарифы</Link>
            <Link to="/authorization" className={s.item_menu}>FAQ</Link>
            <img src={iconMenu} className={s.iconMenu}/>
        </div>
    );
};

export default Menu;