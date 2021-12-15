import React, { useState } from 'react'
import iconClose from '../images/icon-close.svg'
import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'
import '../styles/gallery.css'


const ShowCardBox = ({ setCardClick, smallImage, currentImg }) => {
    const [closeBtn, setCloseBtn] = useState(true)

    const setDisplayStates = () => {
        setCloseBtn(!closeBtn)
        setCardClick(false)
    }
    const [cart, setCart] = useState(currentImg)
    return (
        <main className={closeBtn ? 'cardBox' : 'cardBox-off'}>
            <section className='card-section'>
                <div className='closecard-container'>
                    <img src={iconClose} alt='closeCard' className='closeCard' onClick={() => setDisplayStates()} />
                </div>
                <div className='card-container'>
                    <div className='box Prev'>
                        <img className='prevCard' src={iconPrev} alt='prevCard' />
                    </div>
                    <div className='cardImg-container'>
                        <img src={cart} alt='cartPic' />
                    </div>
                    <div className='box Next'>
                        <img className='nextCard' src={iconNext} alt='nextCard' />
                    </div>
                </div>
            </section>
            <div className='selection-Img'>
                {smallImage.map(img => (
                       <img src={img.src} alt='Img' /> 
                ))}
            </div>
        </main>


    )
}

export default ShowCardBox
