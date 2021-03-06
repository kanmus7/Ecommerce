import React, { useState, useContext, useEffect } from 'react'
import iconCart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import '../styles/header.css'
import Basket from './Basket'
import DataContext from '../context/Context'
import iconClose from '../images/icon-close.svg'

const Header = () => {
    const [basketClick, setBasketClick] = useState(false)
    const [slideClick, setSlideClick] = useState(false)
    const { counter, addCart, setAddCart, setCounter, carClick } = useContext(DataContext)

    useEffect(() => {
        if (!counter) {
            setAddCart(false)
        }
    }, [counter])

    return (
        <header>
            <nav className='menu'>
                <div className='list-container'>
                    <div className='lineOptions' onClick={()=> setSlideClick(true)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <h1 className='headerTitle'>sneakers</h1>
                    <div className={slideClick? 'slide-Menu' : 'slide-MenuOff'}>
                        <img src={iconClose} alt="closeimg" className='iconClose' onClick={()=> setSlideClick(false)}/>
                        <ul className='navOptions'>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='basket-container'>
                        <img src={iconCart} alt='iconCart' onClick={() => setBasketClick(!basketClick)} />
                        <p className={(!addCart || !counter) && 'counter-noDisplay'}>{counter}</p>
                    </div>
                    <img src={avatar} className='avatar-Img' alt='avatarImg' />
                    {(basketClick && !carClick) && (
                        <Basket
                            addCart={addCart}
                            counter={counter}
                            setCounter={setCounter}
                        />
                    )}
                </div>
            </nav>
            <hr className='headerHr'/>
        </header>
    )
}

export default Header
