import {useContext, useState, useRef} from 'react';
import s from './FormRequest.module.css';
import Button from 'comp/Button';
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'
import Input from '../../InputCheckbox';


const FormRequest = () => {
    const {store} = useContext(Context)
    const [start_date, setStart_date] = useState('')
    const [end_date, setEnd_date] = useState('')

    const inputs = [
        {   name: 'maxFullness',
            description: 'Признак максимальной полноты',
            defaultChecked: store.maxFullness,
        },
        {   name: 'inBusinessNews',
            description: 'Упоминания в бизнес-контексте',
            defaultChecked: store.inBusinessNews,
        },
        {   name: 'onlyMainRole',
            description: 'Главная роль в публикации',
            defaultChecked: store.onlyMainRole,
        },
        {   name: 'onlyWithRiskFactors',
            description: 'Публикации только с риск-факторами',
            defaultChecked: store.onlyWithRiskFactors,
        },
        {   name: 'includeTechNews',
            description: 'Включать технические новости рынков',
            defaultChecked: store.includeTechNews,
        },
        {   name: 'includeAnnouncements',
            description: 'Включать анонсы и календари',
            defaultChecked: store.includeAnnouncements,
        },
        {   name: 'includeDigests',
            description: 'Включать сводки новостей',
            defaultChecked: store.includeDigests,
        },
    ]

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
            store.setLimit(limitValue)
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
                store.setStartDate(state.start_date)
                store.setEndDate(state.end_date)
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
                            defaultValue={store.limit}
                            type="number" 
                            placeholder="От 1 до 1000" min="1" max="1000" 
                        />
                        {(state.limitDitry && state.limitError) && <div>{state.limitError}</div>}

                        <h4>Диапазон поиска</h4>
                        <div className={s.range}>
                            <input 
                                onBlur={e => blurHandler(e)}
                                onChange={e => dataHandler(e)}
                                defaultValue={store.startDate}
                                name="start_date"
                                type='date'
                            />
                            <input 
                                onBlur={e => blurHandler(e)}
                                onChange={e => dataHandler(e)}
                                defaultValue={store.endDate}
                                name="end_date"
                                type='date'
                            />
                        </div>
                        {(state.start_dateDitry && state.end_dateDitry && state.dateError) && <div>{state.dateError}</div>}
                    </div>
                    <div className={s.checkboxes}>

                        {inputs.map(arg => (
                            <Input  key={arg.name}
                                    name={arg.name}  // он же id и for
                                    description={arg.description} 
                                    defaultChecked={arg.defaultChecked} 
                                    onClick={e => store.setCheck(e)}/>
                        ))}
                        
                        <Button className={s.search_button} disabled={state.disableButton} >Поиск</Button>
                        <p>* Обязательные к заполнению поля</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default observer(FormRequest);

