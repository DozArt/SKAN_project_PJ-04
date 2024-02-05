import React from 'react';
import s from './Limit.module.css'

const Limit = ({className, data}) => {
    return (
        <div className={className + ' ' + s.limit}>
            <div className={s.rectangle} />
            <div className={s.upper_text}>Использовано компаний</div>
            <div className={s.upper_value}>{data.usedCompanyCount}</div>
            <div className={s.lower_text}>Лимит по компаниям</div>
            <div className={s.lower_value}>{data.companyLimit}</div>
        </div>
    );
};

export default Limit;