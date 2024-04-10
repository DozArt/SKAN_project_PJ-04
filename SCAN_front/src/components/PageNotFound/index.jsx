import React from 'react';
import s from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={s.unit}>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, данная страница выходит за рамки данного ТЗ</p>
        </div>
    );
};

export default PageNotFound;