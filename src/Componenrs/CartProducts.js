import React, { useContext, useEffect, useState } from 'react';
import './Css/cart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdAdd } from 'react-icons/md';
import { GrFormSubtract } from 'react-icons/gr';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { CountContext } from '../CountContext';

export default function CartProducts({ prod, key }) {
    // console.log(cart);
    const {cart,setCart} = useContext(CountContext);
    console.log("cartprs", prod);
    let [total_items, setTotal_item] = useState(1);

    
    console.log(key);
   
    
    

    return (
        <>
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
                            <div className='add_sub_btns'>
                                <div className='add_btn' ><MdAdd /></div>
                                <span className='total_items'>{prod.qty}</span>
                                {
                                    total_items ? (<span className='sub_btn' onClick={() => setTotal_item(total_items - 1)}><GrFormSubtract /></span>) : (<span className='sub_btn' onClick={()=> setCart((cart.filter((items) => items.id !== prod.id)))}><RiDeleteBin5Fill /></span>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
