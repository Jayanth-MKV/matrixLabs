import React from 'react'
import '../styles/Tax.css'

function Tax() {
  return (
      <>
       <div className='main__taxHeading'>
                TAX
              </div>
              <div className='main__taxDetails main--taxline'>
                <div className='main__taxnote1'>3% Buy Tax</div>
                <div className='main__taxnote2'>2% Reserve</div>
                <div className='main__taxnote2'>1% Burn</div>
              </div>
              <div className='main__taxDetails'>
                <div className='main__taxnote1'>7% Sell Tax</div>
                <div className='main__taxnote2'>8% Marketing</div>
                <div className='main__taxnote2'>1% Burn</div>
              </div>
      </>
  )
}

export default Tax