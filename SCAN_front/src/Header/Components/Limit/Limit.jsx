import React from 'react';
import s from './Limit.module.css'

const Limit = ({className}) => {
    return (
        <div className={className}>
            <div className={s.rectangle} />
            <div className={s.upper_text}>Использовано компаний</div>
            <div className={s.upper_value}>34</div>
            <div className={s.lower_text}>Лимит по компаниям</div>
            <div className={s.lower_value}>100</div>
        </div>
    );
};

export default Limit;