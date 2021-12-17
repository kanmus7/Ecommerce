import React, { useContext } from 'react'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cart from '../images/icon-cart.svg'
import DataContext from '../context/Context'

const CardsInfo = () => {
    let { counter, setCounter, addCart, setAddCart } = useContext(DataContext)
    const setCounterButton = (e) => {
        const btn = e.target.alt
        if (btn === 'plusImg') {
            setCounter(++counter)
        }

        if (btn === 'lessImg' && counter > 0) {
            setCounter(--counter)
        }
    }

    return (
        <div className='cardsInfo-container'>
            <h1> SNEAKER COMPANY </h1>
            <p className='mainTitle'>Fall Limited Edition Sneakers</p>
            <p className='mainParagraph'> These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='price-container'>
                <h2>$125.00</h2>
                <p>50%</p>
            </div>
            <p className='oldPrice'> $250.00</p>
            <div className='buttons-container'>
                <div className='addCard-container'>
                    <img src={minus} alt="lessImg" onClick={setCounterButton} />
                    <input type="number" className='count' value={counter} disabled min='0' />
                    <img src={plus} alt="plusImg" onClick={setCounterButton} />
                </div>
                <button className='button' type='button'  onClick={()=> setAddCart(!addCart)}> <img src={cart} alt="cartImg" className='cart-btn' /> <p className='title-btn'>Add to cart</p> </button>
            </div>
        </div>
    )
}

export default CardsInfo
