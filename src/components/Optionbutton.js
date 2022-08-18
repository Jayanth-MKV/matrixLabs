import React from 'react'
import '../styles/Optionbutton.css'

function Optionbutton({title,path}) {
  return (
    <div className='main__cmButton'>
      <div className='main__caninemasterButton'>
        <img className='main__buttonRectangle1' src='rectangle.png' alt='Rectangle' />
        <img className='main__buttonImage' src={`${path}`} alt='logo'/>
              <p className='main__buttonTitle'>{title}</p>
        <img className='main__buttonRectangle2' src='rectangle.png' alt='Rectangle'/>

      </div>
    </div>
  )
}

export default Optionbutton