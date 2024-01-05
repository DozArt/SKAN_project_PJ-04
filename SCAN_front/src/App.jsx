import { useState } from 'react'
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

function App() {
    
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<><UnitDescription /><WhyAs /><Rates /></>} />
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/search" element={<Request />} />
                <Route path="/result" element={<Result />} />
            </Routes>
            
            <Footer />
        </>
    )
}

export default App
