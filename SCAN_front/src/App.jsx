import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {Routes, Route, Link} from 'react-router-dom'
import { Context } from './main'
import s from './App.module.css'
import PrivateRoute from './privateRoute'

import Header from './components/Header'
import Footer from './components/Footer'
import Authorization from './components/Authorization'
import Request from './components/Request'
import UnitDescription from './components/UnitDescription'
import WhyAs from './components/WhyAs'
import Rates from './components/Rates'
import WeAreLooking from './components/WeAreLooking'
import Summary from './components/Summary'
import ListDocuments from './components/ListDocuments'
import PageNotFound from './components/PageNotFound'

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
                    <Route path="result" element={<><WeAreLooking /><Summary /><ListDocuments /></>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default observer(App)
