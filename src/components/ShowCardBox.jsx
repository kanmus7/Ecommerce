import React, { useState, useEffect } from 'react'
import iconClose from '../images/icon-close.svg'
import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'
import '../styles/gallery.css'


const ShowCardBox = ({ setCurrentimg, setCardClick, smallImage, currentImg }) => {
    const [closeBtn, setCloseBtn] = useState(true)
    const [cart, setCart] = useState(currentImg)
    let element = smallImage.find(img => cart.includes(img.src))
    let [acum, setAcum] = useState(element.id)

    const setDisplayStates = () => {
        setCloseBtn(!closeBtn)
        setCardClick(false)
    }

    const setPic = (e) => {
        if (e.target.className.toLowerCase().includes('next')) {
            if (acum < smallImage.length - 1) {
                setAcum(++acum)
                setCart(smallImage[acum].src)
            }
        }
        if (e.target.className.toLowerCase().includes('prev')) {
            if (0 < acum) {
                setAcum(--acum)
                setCart(smallImage[acum].src)
            }
        }
    }

    useEffect(()=>{
        setCurrentimg(cart)
    },[cart])

    const setCardLayout = (e) => {
        setCart(e.target.src)
        setAcum(e.target.id)
    }


    return (
        <main className={closeBtn ? 'cardBox' : 'cardBox-off'}>
            <section className='card-section'>
                <div className='closecard-container'>
                    <img src={iconClose} alt='closeCard' className='closeCard' onClick={() => setDisplayStates()} />
                </div>
                <div className='card-container'>
                    <div className='box Prev' onClick={setPic}>
                        <img className='prevCard' src={iconPrev} alt='prevCard' />
                    </div>
                    <div className='cardImg-container'>
                        <img src={cart} alt='cartPic' />
                    </div>
                    <div className='box Next' onClick={setPic}>
                        <img className='nextCard' src={iconNext} alt='nextCard' />
                    </div>
                </div>
            </section>
            <div className='selection-Img'>
                {smallImage.map(img => (
                    <img src={img.src} alt='Img' key={img.id} id={img.id} onClick={setCardLayout}/>
                ))}
            </div>
        </main>


    )
}

export default ShowCardBox
