import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
export default function RightSide() {
  return (
    <div className='RightSide'>
      <div className='updates'>
        <h4>Updates</h4>
        <Updates />
      </div>
        <div className='costumerRevirws'>
        <h3>Costumer Reviews</h3>
        <CustomerReview/>
      </div>
    </div>
  )
}
