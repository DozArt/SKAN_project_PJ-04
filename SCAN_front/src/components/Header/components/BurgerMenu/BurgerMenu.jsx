import React, { useContext, useState } from 'react';
import s from './BurgerMenu.module.css'
import logo_white from 'img/logo_white.png'
import { Link } from 'react-router-dom';
import { Context } from '@/main';
import Card from '../Card/Card';



const BurgerMenu = ({className}) => {
    const {store} = useContext(Context)
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
                <Link to="/rates"className={s.item_menu} onClick={toggleMenu}>Тарифы</Link>
                <Link to="/faq" className={s.item_menu} onClick={toggleMenu}>FAQ</Link>
            </div>
            <div className={s.bottom_line}>
                
                {store.isAuth ? <Card onClick={toggleMenu}/> :
                <>
                    <div className={s.link_registration} onClick={toggleMenu}>Зарегистрироваться</div>
                    <Link to='/authorization'>
                        <button className={s.button} onClick={toggleMenu} >Войти</button>
                    </Link>
                </>
                }
            </div>
        </div>
    );
};

export default BurgerMenu;