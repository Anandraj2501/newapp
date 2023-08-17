import React, { useContext } from 'react';
import './Css/cart.css';
import { CountContext } from '../CountContext';


export default function Cart() {
  const {
    state: { cart,searchcart },
    dispatch
  } = useContext(CountContext);


  console.log(searchcart);
  return (
    <div className='cart'>
      

      <div className='cart-wrapper'>
        {
          cart.length ? (
            cart.map((prod) => (
              <div className='cart_items_container' >
                <div className="img_container">
                  <span className='image'>
                    <img className="item_image" src={prod.src} alt="img" />
                  </span>
                  <div className='cart_info'>
                    <div className='item_name'>
                      {prod.name}
                    </div>
                    <div className='price_sec'>
                      <span>Rs {prod.price}</span>

                      <select className='form'value={prod.qty} onChange={(e)=>{
                        dispatch({
                          type:"change_qty",
                          payload:{
                            id:prod.id,
                            qty:e.target.value,
                          },
                        })
                      }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                      

                    </div>
                  </div>
                </div>
              </div>
            ))) : (<div>Your cart is empty</div>)
        }

      </div>
    </div>
  )
}
