import React, {useContext, useState, useEffect} from 'react';
import s from './Limit.module.css'
import Loading from '../../../Loading';
import { observer } from 'mobx-react-lite'; // Импорт функции observer
import { Context } from '@/main'

const Limit = ({className, data}) => {

    return (
        <div className={className + ' ' + s.limit}>
            {data.usedCompanyCount !== -1 ? 
                <>
                    <div className={s.row_upper}>
                        <div className={s.upper_text}>Использовано компаний</div>
                        <div className={s.upper_value}>{data.usedCompanyCount}</div>
                    </div>
                    <div className={s.row_lower}>
                        <div className={s.lower_text}>Лимит по компаниям</div>
                        <div className={s.lower_value}>{data.companyLimit}</div>
                    </div>
                </> : <Loading />
            }
        </div>
    );
};

export default Limit;