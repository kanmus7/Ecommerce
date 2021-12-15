import React, { useState } from 'react'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cart from '../images/icon-cart.svg'
import imageProduct1 from '../images/image-product-1.jpg'
import imageProduct2 from '../images/image-product-2.jpg'
import imageProduct3 from '../images/image-product-3.jpg'
import imageProduct4 from '../images/image-product-4.jpg'
import ShowCardBox from './ShowCardBox'
import '../styles/carts.css'


const Cards = () => {    
    const [currentImg, setCurrentimg] = useState(imageProduct1)
    const [carClick, setCardClick] = useState(false)
    const smallImage = [
        {
            src: imageProduct1,
            id: 0
        },
        {
            src: imageProduct2,
            id: 1
        },
        {
            src: imageProduct3,
            id: 2
        },
        {
            src: imageProduct4,
            id: 3
        },
    ]
    const showMainProduct = (e) => {
        setCurrentimg(e.target.src)
    }

    return (
        <section className='main-section'>
            <div className='cards-container'>
                <div className='card'>
                    <img src={currentImg} alt='product' onClick={()=> {setCardClick(!carClick)}} />
                </div>
                <div className='cards'>
                    {smallImage.map((image, i) => (
                        <img src={image.src} alt={`product${i}`} id={i} key={image.id} onClick={showMainProduct} />
                    ))}
                    {carClick? (<ShowCardBox setCardClick={setCardClick} smallImage={smallImage} currentImg={currentImg}/>): console.log('nada')}
                </div>
            </div>

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
                        <img src={minus} alt="lessImg" />
                        <input type="number" className='count' value='0' disabled min='0' />
                        <img src={plus} alt="plusImg" />
                    </div>
                    <button className='button' type='button'> <img src={cart} alt="cartImg" className='cart-btn' /> <p className='title-btn'>Add to cart</p> </button>
                </div>
            </div>
        </section>
    )
}

export default Cards
