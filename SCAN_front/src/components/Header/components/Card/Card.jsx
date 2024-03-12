import {useContext} from 'react';
import s from './Card.module.css'
import mask_example from './images/b90255b2e34039cb3173cdc58ea68b87.jpeg'
import { Context } from '../../../../main'
import { observer } from 'mobx-react-lite'

const Card = ({className, onClick}) => {
    const{store} = useContext(Context);
    return (
        <div className={s.card + ' ' + className} onClick={onClick}>
            <div className={s.left}>
                <span className={s.name}>Алексей А.</span>
                <div onClick = {() => store.handleLogout()} className={s.exit}>Выйти</div>
            </div>
            <div className={s.box_mask}>
                <img className={s.mask} alt="Mask" src={mask_example} />
            </div>
            
        </div>
    );
};

export default observer(Card);