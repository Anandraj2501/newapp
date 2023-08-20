import React, { useContext, useState, useEffect } from 'react';
import './Css/cart.css';
import { CountContext } from '../CountContext';
import { BsFillCartXFill } from "react-icons/bs";
export default function Cart() {
  const {
    state: { cart, searchcart },
    dispatch
  } = useContext(CountContext);
  const [total, setTotal] = useState();

  console.log(searchcart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
  }, [cart]);
  return (
    <div className='cart'>
      <span style={{ fontSize: 30 }}>Total: {total}</span>

      <div className='cart-wrapper'>

        {
          cart.length ? (
            cart.map((prod) => (
              <div className='cart_items_container' >
                <div className="img_container">
                  <span className='image'>
                    <img className="item_image" src={prod.src} alt="img" />
                  </span>
                </div>
                <div className='cart_info'>
                  <div className='item_name'>
                    {prod.name}
                  </div>
                  <div className='price_sec'>
                    <span>Rs {prod.price}</span>

                    <select className='form' value={prod.qty} onChange={(e) => {
                      dispatch({
                        type: "change_qty",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
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
                    <BsFillCartXFill className='dustbinicon' onClick={() => {
                      dispatch({
                        type: "Remove_from_cart",
                        payload: prod,
                      })
                    }} />

                  </div>
                </div>
              </div>
            ))) : (<div>Your cart is empty</div>)
        }


      </div>
    </div>

  )
}
