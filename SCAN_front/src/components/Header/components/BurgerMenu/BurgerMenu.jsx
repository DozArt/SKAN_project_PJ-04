import React, { useState } from 'react';
import s from './BurgerMenu.module.css'
import logo_white from 'img/logo_white.png'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';



const BurgerMenu = ({className}) => {
    
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
      
    return (
        <div className={menuActive ? s.group_menu_active : s.group_menu}>
            <div className={s.back}></div>
            <div className={s.top_line}>
                <div className={s.box}><img className={s.logo_white} src={logo_white} /></div>
                <div className={s.hamburger_menu} onClick={toggleMenu}><span></span><span></span><span></span></div>
            </div>
            <div className={s.items_menu}>
                <Link to="/" className={s.item_menu} onClick={toggleMenu}>Главная</Link>
                <Link to="/result"className={s.item_menu} onClick={toggleMenu}>Тарифы</Link>
                <Link to="/authorization" className={s.item_menu} onClick={toggleMenu}>FAQ</Link>
            </div>
            <div className={s.bottom_line}>
                <div className={s.link_registration} onClick={toggleMenu}>Зарегистрироваться</div>
                <Link to='/authorization'>
                    <button className={s.button} >Войти</button>
                </Link>
                <Card onClick={toggleMenu}/>
            </div>
        </div>
    );
};

export default BurgerMenu;