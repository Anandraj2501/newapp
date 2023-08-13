import React from 'react';
import './Css/cart.css';
import CartProducts from './CartProducts';

export default function Cart() {
  return (
    <div className='cart'>
        <div className='cart-wrapper'>
          <CartProducts/>
        </div>
    </div>
  )
}
