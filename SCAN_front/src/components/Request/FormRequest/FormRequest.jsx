import {useContext, useState, useRef, useEffect} from 'react';
import s from './FormRequest.module.css';
import Button from 'comp/Button';
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import Input from '../../InputCheckbox';
import InputText from '../../InputText';


const FormRequest = () => {
    const {store} = useContext(Context)
    const navigate = useNavigate();

    const inputs = [
        {   name: 'maxFullness',
            description: 'Признак максимальной полноты',
            defaultChecked: store.maxFullness,
        },
        {   name: 'inBusinessNews',
            description: 'Упоминания в бизнес-контексте',
            defaultChecked: false,
        },
        {   name: 'onlyMainRole',
            description: 'Главная роль в публикации',
            defaultChecked: false,
        },
        {   name: 'onlyWithRiskFactors',
            description: 'Публикации только с риск-факторами',
            defaultChecked: false,
        },
        {   name: 'includeTechNews',
            description: 'Включать технические новости рынков',
            defaultChecked: true,
        },
        {   name: 'includeAnnouncements',
            description: 'Включать анонсы и календари',
            defaultChecked: true,
        },
        {   name: 'includeDigests',
            description: 'Включать сводки новостей',
            defaultChecked: true,
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
        end_date: '',
        end_dateDitry: false,
        dateError: 'Введите корректные данные',
        disableButton: true,
    })

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

    const handleTonality = (event) => {
        const selectedTonality = event.target.value;
        store.setTonality(selectedTonality);
    };

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
                    updateState({start_date: dataValue})
                    store.setStartDate(dataValue)
                    store.setEndDate(state.end_date)
                }
                updateState({start_date: dataValue})
                break
            case 'end_date':
                if (state.start_date > dataValue) {
                    updateState({dateError: 'Введите корректные данные'})
                } else {
                    updateState({dateError: ''})
                    updateState({end_date: dataValue})
                    store.setEndDate(dataValue)
                    store.setStartDate(state.start_date)
                }
                updateState({end_date: dataValue})
                break
        }
    }


    const RequestHistogram = () => {

        store.setBodyHistograms(
            {
                issueDateInterval: {
                    startDate: `${store.startDate}T00:00:00+03:00`,
                    endDate: `${store.endDate}T23:59:59+03:00`,
                },
                searchContext: {
                    targetSearchEntitiesContext: {
                        targetSearchEntities: [
                            {
                                type: "company",
                                sparkId: null,
                                entityId: null,
                                inn: Number(store.inn),
                                maxFullness: store.maxFullness,
                                inBusinessNews: store.inBusinessNews,

                            }
                        ],
                        onlyMainRole: store.onlyMainRole,
                        tonality: store.tonality,
                        onlyWithRiskFactors: store.onlyWithRiskFactors,
                        riskFactors: {
                            and: [],
                            or: [],
                            not: []
                        },
                        themes: {
                            and: [],
                            or: [],
                            not: []
                        }
                    },
                    themesFilter: {
                        and: [],
                        or: [],
                        not: []
                    }
                },
                searchArea: {
                    includedSources: [],
                    excludedSources: [],
                    includedSourceGroups: [],
                    excludedSourceGroups: []
                },
                attributeFilters: {
                    excludeTechNews: store.includeTechNews,
                    excludeAnnouncements: store.includeAnnouncements,
                    excludeDigests: store.includeDigests,
                },
                similarMode: "duplicates",
                limit: Number(store.limit),
                sortType: "issueDate",
                sortDirectionType: "desc",
                intervalType: "month",
                histogramTypes: [
                    "totalDocuments",
                    "riskFactors"
                ]
            }
        )
        navigate('/result');
    };


    return (
        <div className={s.unit}>
            <div className={s.inputs}>
            <label>ИНН компании*</label>
                <InputText  name='inn'
                            errorMesage={state.innError}
                            onChange={e => innHandler(e)}
                            type="text"
                            placeholder='ИНН - 10 цифр' />
                
                <label>Тональность</label>
                
                <select id="request_tonality" className={s.tonality} onChange={handleTonality}>
                    <option value="any">Любая</option>
                    <option value="negative">Негативная</option>
                    <option value="positive">Позитивная</option>
                </select>
                <label>Количество документов в выдаче*</label>
                <InputText  name="limit"
                            errorMesage={state.limitError}
                            onChange={limitHandler} 
                            type="number" 
                            placeholder="От 1 до 1000" min="1" max="1000" />

                <label>Диапазон поиска*</label>
                <div className={s.range}>

                    <InputText  name="start_date"
                                errorMesage={state.dateError ? ' ' : ''}
                                onChange={e => dataHandler(e)}
                                type='date'
                                placeholder='Дата начала' />
                                
                    <InputText  name="end_date"
                                errorMesage={state.dateError}
                                onChange={e => dataHandler(e)}
                                type='date'
                                placeholder='Дата начала' />

                </div>

            </div>
            <div className={s.form_right}>
                <div className={s.checkboxes}>
                    {inputs.map(arg => (
                        <Input  key={arg.name}
                                name={arg.name}
                                description={arg.description} 
                                defaultChecked={arg.defaultChecked} 
                                onClick={e => store.setCheck(e)}/>
                    ))}
                </div>
                <div className={s.unit_button}>
                    <Button onClick={() => RequestHistogram()}
                            className={s.search_button} 
                            disabled={!validation} >Поиск</Button>
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </div>
    );
};

export default observer(FormRequest);

