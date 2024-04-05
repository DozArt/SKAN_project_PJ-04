import React from 'react';
import s from './Loading.module.css'


const Loading = ({className}) => {
    return (
        <div className={className + ' ' + s.unit}>

        </div>
    );
};

export default Loading;