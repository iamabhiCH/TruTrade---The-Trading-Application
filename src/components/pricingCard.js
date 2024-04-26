import React from 'react';
import price1 from '../resource/pr1.svg';

const pricingCard = () => {
  return (
    <div>
        <div className='pricingCard-container'>
            <div className='pricingCard'>
                <div className='plan-name'>
                    <h1>FREE</h1>
                </div>
                <div className='pr-img'>
                    <img src={price1} alt='Free' />
                </div>
                <div className='price&day'>
                    <h1>₹</h1>
                    <p>/day</p>
                    <span></span>
                </div>
                <div className='plan-features'>
                    
                </div>
                <div>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default pricingCard