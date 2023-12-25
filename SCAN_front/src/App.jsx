import { useState } from 'react'
import s from './App.module.css'
import Header from './Header/Header'
import UnitDescription from './UnitDescription/UnitDescription'
import WhyAs from './WhyAs/WhyAs'
import Rates from './Rates/Rates'
import Footer from './Footer/Footer'

function App() {
        return (
            <>
                <Header />
                <UnitDescription />
                <WhyAs />
                <Rates />
                <Footer />
            </>
        )
}

export default App
