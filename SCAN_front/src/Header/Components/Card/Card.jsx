import React from 'react';
import s from './Card.module.css'
import mask_example from './images/b90255b2e34039cb3173cdc58ea68b87.jpeg'

const Card = ({className}) => {
    return (
        <div className={className}>
            <span className={s.name}>Алексей А.</span>
            <div className={s.exit}>Выйти</div>
            <div className={s.box_mask}>
                <img className={s.mask} alt="Mask" src={mask_example} />
            </div>
            
        </div>
    );
};

export default Card;