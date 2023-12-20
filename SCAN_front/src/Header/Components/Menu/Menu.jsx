import React from 'react';
import s from './Menu.module.css'
import iconMenu from './images/group-5.svg'

const Menu = ({className}) => {
    return (
        <div className={className + ' ' + s.group_menu}>
            <div className={s.item_menu}>Главная</div>
            <div className={s.item_menu}>Тарифы</div>
            <div className={s.item_menu}>FAQ</div>
            <img src={iconMenu} className={s.iconMenu}/>
        </div>
    );
};

export default Menu;