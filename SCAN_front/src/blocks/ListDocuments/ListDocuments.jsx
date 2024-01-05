import React from 'react';
import s from './ListDocuments.module.css'
import Rate_item from './components/Document_item'

const list_documents = [
    {
        title: 'Скиллфэктори - лучшая онлайн-школа для будущих айтишников',
        comment: 'SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.',
        activ: true,
    },
    {
        title: 'Скиллфэктори - лучшая онлайн-школа для будущих айтишников',
        comment: 'SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.',
        activ: true,
    },
]

const ListDocuments = () => {

    return (
        <div className={s.unit}>
            <h2 className={s.title}>наши тарифы</h2>
            <div className={s.ListDocuments}>
                {list_documents.map(arg => (
                    <Rate_item card_document = {arg} />
                ))}
            </div>
            
        </div>
    );
};

export default ListDocuments;