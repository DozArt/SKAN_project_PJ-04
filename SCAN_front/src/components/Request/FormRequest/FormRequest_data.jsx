import {useContext} from 'react';
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'


const FormRequest = () => {
    const {store} = useContext(Context)

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
};

export default observer(FormRequest);

