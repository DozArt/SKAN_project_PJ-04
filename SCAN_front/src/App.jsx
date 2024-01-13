import { useContext, useEffect, useState } from 'react'
import s from './App.module.css'
import {Routes, Route, Link} from 'react-router-dom'
import Header from './blocks/Header/Header'
import UnitDescription from './blocks/UnitDescription/UnitDescription'
import WhyAs from './blocks/WhyAs/WhyAs'
import Rates from './blocks/Rates/Rates'
import Footer from './blocks/Footer/Footer'
import Authorization from './blocks/Authorization/Authorization'
import Request from './blocks/Request/Request'
import Result from './Pages/Result/Result'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import PrivateRoute from './privateRoute'

function App() {
    const {store} = useContext(Context)

    useEffect( () => {
        if(localStorage.getItem('accessToken')) {
            store.checkAuth(localStorage.getItem('accessToken'))
            console.log('запуск checkAuth')
        }
    }, [])

    return (
        <>
            <Header />
                
            <Routes>
                <Route path="/" element={<><UnitDescription /><WhyAs /><Rates /></>} />
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/" element={<PrivateRoute  />}>
                    <Route path="search" element={<Request />} />
                    <Route path="result" element={<Result />} />
                </Route>

            </Routes>
            <Footer />
        </>
    )
}

export default observer(App)
