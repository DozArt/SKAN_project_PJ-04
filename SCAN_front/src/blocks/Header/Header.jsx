import {useContext} from 'react';
import s from './Header.module.css'
import srcLogo from '../../public/images/a21cf0e37634bf7f262554f86388e0d5.png';
import Card from './Components/Card/Card';
import Limit from './Components/Limit/Limit';
import Menu from './Components/Menu/Menu';
import Authorization from './Components/Authorization/Authorization';
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'

const Header = () => {
    const {store} = useContext(Context)

    return (
        <header className={s.header}>
            <img className={s.logo} src={srcLogo} ali='logo' />
            <Menu className={s.group_menu}/>

            {store.isAuth ? 
                <>
                    <Card className={s.card} />
                    <Limit className={s.limit_section} data={store.eventFiltersInfo}/>
                </> : 
                <Authorization className={s.authorization} />
                }

            
            {/* 
            
            
            */}
            
        </header>
    );
};

export default observer(Header);