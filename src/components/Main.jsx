import React, { useState } from 'react'
import Header from './Header'
import Cards from './Cards'
import DataContext from '../context/Context'

const Main = () => {
    const [counter, setCounter] = useState(0)
    const [addCart, setAddCart] = useState(false)
    const [carClick, setCardClick] = useState(false)
  
    return (
        <DataContext.Provider value={{ counter, setCounter, addCart, setAddCart, carClick, setCardClick }} >
            <Header />
            <Cards />
        </DataContext.Provider>
    )
}

export default Main
