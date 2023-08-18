import React,{useContext} from 'react';
import "./Css/Wishlist.css";
import { CountContext } from '../CountContext';
export default function Wishlist() {
    const { count, setCount } = useContext(CountContext);
    const {
        state: { cart,appstate,wishlist },
        dispatch,
      } = useContext(CountContext);
    return (
        <div>
            <div className="brand-cards-container">
                <div className="wishlist-cards-wrapper">
                    {
                        wishlist.map((prod, index) => (
                            <div key={index} className="wishlist-card-container">
                                <span className='brand-container'>
                                    <img src={prod.src} alt="img" className='brand-img' />
                                </span>
                                <div className="brand-info">
                                    <span className='name'>{prod.name}</span>
                                    <span className='price'>Rs {prod.price}</span>
                                    <div className="buy">
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
                                        {
                                            cart.some((p) => p.id === prod.id) ? (<button className='remove_btn' onClick={() => {
                                                dispatch({
                                                    type: "Remove_from_cart",
                                                    payload: prod,
                                                })
                                            }}>Remove</button>) : (<span><i className="fa-solid fa-bag-shopping fa-xl " onClick={() => {
                                                dispatch({
                                                    type: "Add_to_cart",
                                                    payload: prod,
                                                })
                                            }}
                                                style={{ color: "#212121" }}></i></span>)
                                        }

                                    </div>
                                </div>
                            </div>
                        ))}

                </div>

            </div>
        </div>
    )
}
