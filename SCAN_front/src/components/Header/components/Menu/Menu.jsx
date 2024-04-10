import React, { useState } from 'react';
import s from './Menu.module.css'
import { Link } from 'react-router-dom';



const Menu = ({className}) => {
    
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            {/* <img src={iconMenu} className={s.iconMenu} onClick={() => setMenuActive(!menuActive)}/> */}
            <div className={s.group_menu}>
                <Link to="/" className={s.item_menu}>Главная</Link>
                <Link to="/rates"className={s.item_menu}>Тарифы</Link>
                <Link to="/faq" className={s.item_menu}>FAQ</Link>

            </div>
        </>
        
    );
};

export default Menu;