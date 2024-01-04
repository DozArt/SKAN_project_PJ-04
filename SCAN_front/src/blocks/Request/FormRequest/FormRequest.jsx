import React from 'react';
import s from './FormRequest.module.css';
import Button from '../../../components/Button/Button';

const FormRequest = () => {
    return (
        <div className={s.unit}>
            <div className={s.form}>
                <div className={s.form_request}>
                    <div className={s.inputs}>
                        <h4>ИНН компании</h4>
                        <input />
                        <h4>Тональность</h4>
                        <input />
                        <h4>Количество документов в выдаче</h4>
                        <input />
                        <h4>Диапазон поиска</h4>
                        <div className={s.range}>
                            <input /><input />
                        </div>
                    </div>
                    <div className={s.checkboxes}>
                        <div><input type='checkbox' /> Признак максимальной полноты</div>
                        <div><input type='checkbox' /> Упоминания в бизнес-контексте</div>
                        
                        <Button className={s.search_button} disabled={true} >Поиск</Button>
                        <p>* Обязательные к заполнению поля</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FormRequest;

