import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <nav className='header'>
      <div className='header__icon'>
        <img className='header__logo' src='logo.png' alt='logo'/>
        <span className='header__logoName'>MATRIX LABS</span>
      </div>
      <div className='header__list'>
        <div className='header__listItems'>
          <div className='header__item'>Home</div>
          <div className='header__item'>About</div>
          <div className='header__item'>Whitepaper</div>
          <div className='header__item'>Audit</div>
          <div className='header__item'>Telegram</div>
        </div>
        <div className='header__button header__item'>CONNECT</div>
        <div className='header__navBtn' onClick={toggle}>
          <div  className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}


function toggle() {
const navbarLinks = document.getElementsByClassName('header__listItems')[0]

  navbarLinks.classList.toggle('active')
}

export default Header