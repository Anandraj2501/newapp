import React from 'react';
import './Css/cart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdAdd } from 'react-icons/md';
import {GrFormSubtract} from 'react-icons/gr';

export default function CartProducts() {
    return (
        <>
            {/* <div className='cart_items_container'>
                <div className="img_container">
                    <div className='image'>
                    <img className="item_image"  src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img"  /></div>
                    <div className='cart_info'>
                        <div className='item_name'>
                            Iphone
                        </div>
                        <div className='price_sec'>
                            <span>Rs45000</span>
                            <div className='add_sub_btns'>
                                <div className='add_btn'><MdAdd /></div>
                                <span className='total_items'>1</span>
                                <span className='sub_btn'><GrFormSubtract/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}
