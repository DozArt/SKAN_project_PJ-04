import {useContext, useState, useRef, useEffect} from 'react';
import s from './FormRequest.module.css';
import Button from 'comp/Button';
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'
import Input from '../../InputCheckbox';
import InputText from '../../InputText';


const FormRequest = () => {
    const {store} = useContext(Context)
    // const [start_date, setStart_date] = useState('')
    // const [end_date, setEnd_date] = useState('')

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
    const [validation, setValidation] = useState(false)

    const [state, setState] = useState({
        inn: '',
        innDitry: false,
        innError: 'Не верный ИНН',
        limit: false,
        limitError: 'Диапазин значений от 1 до 1000',
        start_date: '',
        start_dateDitry: false,
        end_date: '99999999',
        end_dateDitry: false,
        dateError: '',
        disableButton: true,
    })
    

    // const startDate = useRef(null)
    // const endDate = useRef(null)

    useEffect(() => {
        if (state.innError || state.limitError || state.dateError) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [state])

    const updateState = (state) => {
        setState(prev => ({
            ...prev,
            ...state
        }))
    }

    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'inn':
    //             updateState({innDitry: true})
    //             console.log('inn')
    //             break
    //         case 'limit':
    //             updateState({limitDitry: true})
    //             break
    //         case 'start_date':
    //             updateState({start_dateDitry: true})
    //             validDateForm()
    //             break
    //         case 'end_date':
    //             updateState({end_dateDitry: true})
    //             validDateForm()
    //             break
    //     }
    // }


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
            case 'start_date':
                if (dataValue > state.end_date) {
                    updateState({dateError: 'Введите корректные данные'})
                } else {
                    updateState({dateError: ''})
                    store.setStartDate(dataValue)
                }
                updateState({start_date: dataValue})
                break
            case 'end_date':
                if (state.start_date > dataValue) {
                    updateState({dateError: 'Введите корректные данные'})
                } else {
                    updateState({dateError: ''})
                    store.setEndDate(dataValue)
                }
                updateState({end_date: dataValue})
                break
        }
    }

    const validDateForm = () => {
        if (state.start_date > state.end_date) {
            console.log(state.start_date, state.end_date)
            updateState({dateError: 'Введите корректные данные'})
        } else {
            updateState({dateError: ''})
            store.setStartDate(state.start_date)
            store.setEndDate(state.end_date)
        }
    }


    return (
        <div className={s.unit}>
            <div className={s.inputs}>
                
                <InputText  label="ИНН компании*"
                            name='inn'
                            // value={state.inn}
                            errorMesage={state.innError}
                            defaultValue={store.inn}
                            onChange={e => innHandler(e)}
                            type="text"
                            placeholder='ИНН - 10 цифр' />
                
                <label>Тональность</label>
                
                <select id="request_tonality" className={s.tonality}>
                    <option value="any">Любая</option>
                    <option value="negative">Негативная</option>
                    <option value="neutral">Нейтральная</option>
                    <option value="positive">Позитивная</option>
                </select>

                <InputText  label="Количество документов в выдаче*"
                            name="limit"
                            errorMesage={state.limitError}
                            defaultValue={store.limit}
                            onChange={limitHandler} 
                            type="number" 
                            placeholder="От 1 до 1000" min="1" max="1000" />

                <label>Диапазон поиска*</label>
                <div className={s.range}>

                    <InputText  name="start_date"
                                errorMesage={state.dateError ? ' ' : ''}
                                defaultValue={store.startDate}
                                onChange={e => dataHandler(e)}
                                type='date'
                                placeholder='Дата начала' />
                                
                    <InputText  name="end_date"
                                errorMesage={state.dateError ? ' ' : ''}
                                defaultValue={store.endDate}
                                onChange={e => dataHandler(e)}
                                type='date'
                                placeholder='Дата начала' />
                    
                        {/* здесь предупреждение об ошибке еще работает */}
                        {/* <input 
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
                        /> */}
                </div>

                {(state.dateError) && <div>{state.dateError}</div>}
                {/* {(state.dateError) && <div>{state.dateError}</div>}   */}
            </div>
            <div className={s.form_right}>
                <div className={s.checkboxes}>
                    {inputs.map(arg => (
                        <Input  key={arg.name}
                                name={arg.name}  // он же id и for
                                description={arg.description} 
                                defaultChecked={arg.defaultChecked} 
                                onClick={e => store.setCheck(e)}/>
                    ))}
                </div>
                <div className={s.unit_button}>
                    <Button className={s.search_button} disabled={!validation} >Поиск</Button>
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </div>
    );
};

export default observer(FormRequest);

