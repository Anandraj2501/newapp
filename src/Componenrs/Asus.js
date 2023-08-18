import React from 'react';
import './Css/main.css';
import { useContext } from 'react';
import { CountContext } from '../CountContext';


export default function Iphone() {
    const { count, setCount } = useContext(CountContext);

    const {
        state: { cart, appstate,wishlist },
        dispatch,
    } = useContext(CountContext);

    let values = appstate.filter((c)=>c.brand==="asus");
    

    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">

                    {
                        values.map((prod, index) => (
                            <div key={index} className="card-container">
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
                    {/* <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Asus</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Asus</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Asus</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Asus</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
