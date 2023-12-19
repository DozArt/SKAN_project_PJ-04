import React from 'react';
import style from './Card.module.css'
import mask_example from './images/b90255b2e34039cb3173cdc58ea68b87.jpeg'

const Card = ({className}) => {
    style.from_parent = className

    return (
        <div className={style.from_parent}>
            <span className={style.name}>Алексей А.</span>
            <div className={style.exit}>Выйти</div>
            <div className={style.box_mask}>
                <img className={style.mask} alt="Mask" src={mask_example} />
            </div>
            
        </div>
    );
};

export default Card;