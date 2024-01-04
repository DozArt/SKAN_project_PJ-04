import { useState } from 'react'
import s from './App.module.css'
import Header from './blocks/Header/Header'
import UnitDescription from './blocks/UnitDescription/UnitDescription'
import WhyAs from './blocks/WhyAs/WhyAs'
import Rates from './blocks/Rates/Rates'
import Footer from './blocks/Footer/Footer'
import Authorization from './blocks/Authorization/Authorization'

function App() {
        return (
            <>
                <Header />
    
                <Authorization />
                <Footer />
                
                <UnitDescription />
                <WhyAs />
                <Rates />
                <Footer />
            </>
        )
}

export default App
