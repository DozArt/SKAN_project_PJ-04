import React from 'react';
import s from './Rates.module.css'
import Rate_item from './components/Rate_item'
import img_lamp from './images/Group 1171274215.svg'
import img_dars from './images/Group 1171274216.svg'
import img_comp from './images/Group 1171274214.svg'

const rates = [
    {
        title: 'Beginner',
        comment: 'Для небольшого исследования',
        color: 'orange',  /* orange || aqua || black */
        icon: img_lamp,
        activ: true,
        new_price: 799,
        old_price: 1200,
        text_addition: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        includes: [
            'Безлимитная история запросов',
            'Безопасная сделка',
            'Поддержка 24/7',
        ]
    },
    {
        title: 'Pro',
        comment: 'Для HR и фрилансеров',
        color: 'aqua',
        icon: img_dars,
        activ: false,
        new_price: 1299,
        old_price: 2600,
        text_addition: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        includes: [
            'Все пункты тарифа Beginner',
            'Экспорт истории',
            'Рекомендации по приоритетам',
        ]
    },
    {
        title: 'Business',
        comment: 'Для корпоративных клиентов',
        color: 'black',
        icon: img_comp,
        activ: false,
        new_price: 2379,
        old_price: 3700,
        text_addition: '',
        includes: [
            'Все пункты тарифа Pro',
            'Безлимитное количество запросов',
            'Приоритетная поддержка',
        ]
    },
]

const Rates = () => {

    return (
        <div className={s.unit}>
            <h2 className={s.title}>наши тарифы</h2>
            <div className={s.rates}>
                {rates.map(arg => (
                    <Rate_item key={arg.title} card_details = {arg} />
                ))}
            </div>
            
        </div>
    );
};

export default Rates;