import React from 'react'
import './pricing.css';
import PricingCard from './pricingCard';

const pricing = () => {
  return (
    <div className='pricing-container'>
        <div className='pricing-head'>
            <h1>Our Pricing Plan</h1>
            <p>Pricing That Adapts to Your Success</p>
        </div>
        <PricingCard />
    </div>
  )
}

export default pricing