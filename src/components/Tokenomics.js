import React from 'react'
import '../styles/Tokenomics.css'

function Tokenomics() {
  return (
    <>
     <h3 className='main__tokenomicsHeading'>TOKENOMICS</h3>
              <div className='main__tokenomicsChests'>
                <div className='main__tokenomicsChest'>
                  <img className='main__tokenomicsImg' src='chest.png' alt='chest'/>
                  <div className='main__tokenomicsTopic'>
                    <span className='main__tokenomicsPercent'>10%</span>
                    <span className='main__tokenomicsName'>TEAM LOCK</span>
                  </div>
                </div>
                <div className='main__tokenomicsChest'>
                  <img className='main__tokenomicsImg' src='chest.png' alt='chest'/>
                  <div className='main__tokenomicsTopic'>
                    <span className='main__tokenomicsPercent'>20%</span>
                    <span className='main__tokenomicsName'>STAKING REWARDS</span>
                  </div>
                </div>
                <div className='main__tokenomicsChest'>
                  <img className='main__tokenomicsImg' src='chest.png' alt='chest'/>
                  <div className='main__tokenomicsTopic'>
                    <span className='main__tokenomicsPercent'>30%</span>
                    <span className='main__tokenomicsName'>LIQUIDITY</span>
                  </div>
                </div>
                <div className='main__tokenomicsChest'>
                  <img className='main__tokenomicsImg' src='chest.png' alt='chest'/>
                  <div className='main__tokenomicsTopic'>
                    <span className='main__tokenomicsPercent'>40%</span>
                    <span className='main__tokenomicsName'>FAIR LAUNCH</span>
                  </div>
                </div>
              </div>  
    </>
  )
}

export default Tokenomics