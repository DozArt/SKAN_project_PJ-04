import {useContext, useState, useRef} from 'react';
import s from './FormRequest.module.css';
import Button from '../../../components/Button/Button';
import { Context } from '../../../main'
import { observer } from 'mobx-react-lite'

const FormRequest = () => {
    const {store} = useContext(Context)
    const [start_date, setStart_date] = useState('')
    const [end_date, setEnd_date] = useState('')

    const [state, setState] = useState({
        inn: '',
        innDitry: false,
        innError: 'Заполните ИНН',
        limit: false,
        limitError: 'Введите значение в диапазоне от 1 до 1000',
        start_date: '',
        start_dateDitry: false,
        end_date: '',
        end_dateDitry: false,
        dateError: 'Введите корректные данные',
        disableButton: true,
    })


    const startDate = useRef(null)
    const endDate = useRef(null)


    const updateState = (state) => {
        setState(prev => ({
            ...prev,
            ...state
        }))
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'inn':
                updateState({innDitry: true})
                break
            case 'limit':
                updateState({limitDitry: true})
                break
            case 'start_date':
                updateState({start_dateDitry: true})
                validDateForm()
                break
            case 'end_date':
                updateState({end_dateDitry: true})
                validDateForm()
                break
        }
    }


    const innHandler = (e) => {
        const innValue = e.target.value
        updateState({inn: innValue})
        
        const innNum = innValue.split('')
        const coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8]
        let innSumma = 0;

        for (let i in coefficients) {
            innSumma += coefficients[i] * innNum[i];
        }

        const innCheck = innSumma % 11 % 10;
        const result = innNum[9] === innCheck.toString()

        if (e.target.value.length < 10) {
            updateState({innError: 'ИНН короткий'})
        } else if(!result) {
            updateState({innError: 'Не верный ИНН'})
        } else {
            updateState({innError: ''})
            store.setInn(innValue)
        }
    }


    const limitHandler = (e) => {
        const limitValue = e.target.value
        updateState({limit: limitValue})

        if (limitValue < 1 || limitValue > 1000 ) {
            updateState({limitError: 'Диапазин значений от 1 до 1000'})
        } else {
            updateState({limitError: ''})
        }
    }


    const dataHandler = (e) => {
        const dataValue = e.target.value

        switch (e.target.name) {
            case 'end_date':
                updateState({end_date: dataValue})
                break
            case 'start_date':
                updateState({start_date: dataValue})
                break
            
        }
    }

    const validDateForm = () => {
        if(state.start_dateDitry && state.end_dateDitry) {
            if (state.start_date > state.end_date) {
                updateState({dateError: 'Введите корректные данные'})
            } else {
                updateState({dateError: ''})
            }
        }
        
    }


    return (
        <div className={s.unit}>
            <div className={s.form}>
                <div className={s.form_request}>
                    <div className={s.inputs}>
                        
                        <h4>ИНН компании</h4>
                        <input 
                            onBlur={e => blurHandler(e)}
                            onChange={e => innHandler(e)}
                            name='inn'
                            defaultValue={store.inn}
                            type='text'
                            placeholder='ИНН - 10 цифр'
                        />
                        {(state.innDitry && state.innError) && <div>{state.innError}</div>}
                        <h4>Тональность</h4>
                        <select id="request_tonality" >
                            <option value="any">Любая</option>
                            <option value="negative">Негативная</option>
                            <option value="neutral">Нейтральная</option>
                            <option value="positive">Позитивная</option>
                        </select>

                        <h4>Количество документов в выдаче</h4>
                        <input 
                            onBlur={e => blurHandler(e)}
                            onChange={limitHandler} 
                            name="limit"
                            type="number" 
                            placeholder="От 1 до 1000" min="1" max="1000" 
                        />
                        {(state.limitDitry && state.limitError) && <div>{state.limitError}</div>}

                        <h4>Диапазон поиска</h4>
                        <div className={s.range}>
                            <input 
                            onBlur={e => blurHandler(e)}
                            onChange={e => dataHandler(e)}
                            name="start_date"
                            type='date'
                        />
                        <input 
                            onBlur={e => blurHandler(e)}
                            onChange={e => dataHandler(e)}
                            name="end_date"
                            type='date'
                        />
                        </div>
                        {(state.start_dateDitry && state.end_dateDitry && state.dateError) && <div>{state.dateError}</div>}
                    </div>
                    <div className={s.checkboxes}>
                        <label>
                            <input type="checkbox" />
                            Признак максимальной полноты
                        </label>

                        <label>
                            <input type="checkbox" />
                            Упоминания в бизнес-контексте
                        </label>

                        <label>
                            <input type="checkbox" />
                            Главная роль в публикации
                        </label>

                        <label>
                            <input type="checkbox" />
                            Публикации только с риск-факторами
                        </label>

                        <label>
                            <input type="checkbox" />
                            Включать технические новости рынков
                        </label>

                        <label>
                            <input type="checkbox" />
                            Включать анонсы и календари
                        </label>

                        <label>
                            <input type="checkbox" />
                            Включать сводки новостей
                        </label>
                        
                        <Button className={s.search_button} disabled={state.disableButton} >Поиск</Button>
                        <p>* Обязательные к заполнению поля</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default observer(FormRequest);

