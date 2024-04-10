import {useContext, useEffect, useState} from 'react';
import srcLogo from '../../public/images/a21cf0e37634bf7f262554f86388e0d5.png';
import Card from './components/Card/Card';
import s from './Header.module.css'

import Limit from './components/Limit/Limit';
import Menu from './components/Menu/Menu';
import Authorization from './components/Authorization/Authorization';
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

const Header = () => {
    const {store} = useContext(Context)

    return (
        <header className={s.header}>
            <img className={s.logo} src={srcLogo} ali='logo' />
            <div className={s.group_menu}><Menu/></div>

            {store.isAuth ? 
                <>
                    <Limit className={s.limit_section} data={store.eventFiltersInfo}/>
                    <Card className={s.card} />
                </> : 
                <div className={s.authorization} >
                    <Authorization />
                </div>
            }
            <BurgerMenu />
            
        </header>
    );
};

export default observer(Header);