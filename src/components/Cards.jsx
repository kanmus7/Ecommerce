import React, { useState, useContext } from 'react'
import ShowCardBox from './ShowCardBox'
import CardsInfo from './CardsInfo'
import '../styles/carts.css'
import DataContext from '../context/Context'
import imageProduct1 from '../images/image-product-1.jpg'
import imageProduct2 from '../images/image-product-2.jpg'
import imageProduct3 from '../images/image-product-3.jpg'
import imageProduct4 from '../images/image-product-4.jpg'


const Cards = () => {
    const {  carClick, setCardClick } = useContext(DataContext)
    const [currentImg, setCurrentimg] = useState(imageProduct1)
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
                    <img src={currentImg} alt='product' onClick={() => { setCardClick(!carClick) }} />
                </div>
                <div className='cards'>
                    {smallImage.map((image, i) => (
                        <img src={image.src} alt={`product${i}`} id={i} key={image.id} onClick={showMainProduct} />
                    ))}
                    {carClick && (<ShowCardBox setCurrentimg={setCurrentimg} setCardClick={setCardClick} smallImage={smallImage} currentImg={currentImg} />)}
                </div>
            </div>
            <CardsInfo />
        </section>
    )
}

export default Cards
