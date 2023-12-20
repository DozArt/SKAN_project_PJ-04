import { useState } from 'react'
import s from './App.module.css'
import Header from './Header/Header'
import UnitDescription from './UnitDescription/UnitDescription'
import WhyAs from './WhyAs/WhyAs'

function App() {
        return (
            <>
                <Header />
                <UnitDescription />
                <WhyAs />
            </>
        )
}

export default App
