import React from 'react'
import '../styles/basket.css'
import imageProduct1 from '../images/image-product-1-thumbnail.jpg'
import deleteImg from '../images/icon-delete.svg'


const Basket = ({ addCart, counter, setCounter }) => {
    const ShowCard = () => (
        (addCart && counter) ? (
            <>
                <div className='cartBasket-Info'>
                    <img className='imgProduct' src={imageProduct1} alt='imgProduct' />
                    <p>Fall Limited Edition Sneakers $125.00 x {counter} <span className='finalPrice'>{`$${125 * counter}.00`}</span></p>
                    <img className='deleteIcon' src={deleteImg} alt='deleteIcon' onClick={()=> setCounter(0)} />
                </div>
                <button type='button'>Checkout</button>
            </>
        ) :
            (
                <p>Your cart is empty.</p>
            )
    )
    return (
        <div className='basket' container>
            <div className='basket-Title'>
                <h1>Cart</h1>
                <hr />
            </div>
            <div className='cardsSelected-Container'>
                <ShowCard />
            </div>
        </div>
    )
}

export default Basket
