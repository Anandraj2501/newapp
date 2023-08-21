import React, { useContext } from 'react';
import "./Css/Wishlist.css";
import { CountContext } from '../CountContext';
export default function Wishlist() {
    const {
        state: { cart, wishlist },
        dispatch,
    } = useContext(CountContext);
    return (
        <div>
            <div className="brand-cards-container">
                <div className="wishlist-cards-wrapper">
                    {
                        (wishlist.length > 0) ? (
                            wishlist.map((prod, index) => (
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
                                    </div>
                                    <div className='wishlist-info'>
                                        <span>
                                            {
                                                wishlist.some((p) => p.id === prod.id) ? (<i key={index} className="fa-solid fa-heart fa-xl" onClick={() => {
                                                    dispatch({
                                                        type: "Remove_from_wishlist",
                                                        payload: prod,
                                                    })
                                                }} style={{ color: "#f51414" }}></i>) : (
                                                    <i key={index} className="fa-regular fa-heart fa-xl" onClick={() => {
                                                        dispatch({
                                                            type: "Add_to_wishlist",
                                                            payload: prod,
                                                        })
                                                    }} style={{ color: "#f51414" }}></i>)
                                            }
                                        </span>
                                        <span>
                                            {
                                                cart.some((p) => p.id === prod.id) ? (<button className='remove_btn' onClick={() => {
                                                    dispatch({
                                                        type: "Remove_from_cart",
                                                        payload: prod,
                                                    })
                                                }}>Remove</button>) : (<i className="fa-solid fa-bag-shopping fa-xl " onClick={() => {
                                                    dispatch({
                                                        type: "Add_to_cart",
                                                        payload: prod,
                                                    })
                                                }}
                                                    style={{ color: "#212121" }}></i>)
                                            }
                                        </span>
                                    </div>
                                </div>

                            ))) : (<div>Empty</div>)}

                </div>

            </div>
        </div>
    )
}