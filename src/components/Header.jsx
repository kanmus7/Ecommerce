import React from 'react'
import iconCart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <nav className='menu'>
                <div className='list-container'>
                <h1 className='headerTitle'>sneakers</h1>
                <ul className='navOptions'>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
                <div className='img-container'>
                    <img src={iconCart} alt='iconCart'/>
                    <img src={avatar} className='avatar-Img' alt='avatarImg'/>
                </div>
            </nav>
            <hr/>
        </header>
    )
}

export default Header
