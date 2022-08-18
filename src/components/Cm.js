import React from 'react'
import Optionbutton from './Optionbutton'
import Tokenomics from './Tokenomics'
import Tax from './Tax'
import '../styles/Cm.css'

function Cm() {
  return (
      <div className='main__caninemaster'>
            <img className='main__caninemasterImg' src='cm-dog.png' alt='CanineMaster'/>
            <div className='main__cmButtons'>
              <Optionbutton title="Buy Now" path="cart.png"/>
              <Optionbutton title="Chart" path="chart.png"/>
              <Optionbutton title="Contract" path="contract.png"/>
            </div>
            <div className='main__tokenomics'>
             <Tokenomics />
            </div>
            <div className='main__tax '>
             <Tax />
            </div>

          </div>
  )
}

export default Cm