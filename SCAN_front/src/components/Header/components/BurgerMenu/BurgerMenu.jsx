import React, { useState } from 'react';
import s from './BurgerMenu.module.css'
import logo_white from 'img/logo_white.png'
import { Link } from 'react-router-dom';



const BurgerMenu = ({className}) => {
    
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
      
    return (
        <div className={menuActive ? s.background_active : s.background}>
            <div className={s.back}></div>
            <div className={s.top_line}>
                <div className={s.box}><img className={s.logo_white} src={logo_white} /></div>
                <div className={s.hamburger_menu} onClick={toggleMenu}><span></span><span></span><span></span></div>
            </div>
            <div className={s.items_menu}>
                <Link to="/" className={s.item_menu}>Главная</Link>
                <Link to="/result"className={s.item_menu}>Тарифы</Link>
                <Link to="/authorization" className={s.item_menu}>FAQ</Link>
            </div>
        </div>
    );
};

export default BurgerMenu;