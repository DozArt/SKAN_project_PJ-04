import React from 'react';
import { Link } from 'react-router-dom';
import s from './UnitDescription.module.css'
import imageMascot from '../../public/images/image_1.webp'
import Button from '../../components/Button/Button';

const UnitDescription = () => {
    return (
        <div className={s.unit}>
            <div>
                <h1 className={s.title}>
                    сервис по поиску<br />
                    публикаций<br />
                    о компании<br />
                    по его ИНН
                </h1>
                <p className={s.text_description}>
                    Комплексный анализ публикаций, получение данных<br />
                    в формате PDF на электронную почту.
                </p>
                <Link to="/search" >
                    <Button className={s.button} >
                        Запросить данные
                    </Button>
                </Link>
            </div>
            <img className={s.mascot} src={imageMascot} />
        </div>
    );
};

export default UnitDescription;