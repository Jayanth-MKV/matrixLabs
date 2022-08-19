import React from 'react'
import '../styles/Main.css'
import Cm from './Cm'
import Fm from './Fm'
import Typing from './Typing'

function Main() {
  return (
    <div className='main'>
      <Typing />
      <div className='main__title'>
        <h1 className='main__titleHeading'>The Kuppy System</h1>
        <p className='main__titleParagraph'>The Kuppy Clans Ecosystem consists of our two Native</p>
        <p className='main__titleParagraph'>Tokens- Canine Master and Feline Master.</p>
      </div>
      <div className='main__characters'>
        <div className='main__bg1'>
        <Cm />
        </div>
        <div className='main__bg2'>
          <Fm />
        </div>
      </div>
    </div>
  )
}

export default Main