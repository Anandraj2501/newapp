import React, { useContext } from 'react';
import './Css/main.css';

import { CountContext } from '../CountContext';
export default function Singleproductlaptop({prod}) {
    const { count, setCount } = useContext(CountContext);
    const {
        state: { cart,appstate,wishlist },
        dispatch,
      } = useContext(CountContext);
    let values = appstate.filter((c)=>c.brand===`${prod}`);
    // function handleclick(index) {
    //     console.log("chlra hai");
    //     if (values[index].sheartcolor === true) {
    //         values[index].sheartcolor = false;
    //         console.log("chlra 1hai");
    //         console.log("onclick");
    //         setCount(count + 1);
    //     }
    //     else {
    //         values[index].sheartcolor = true;
    //         console.log("chlra2 hai");
    //         setCount(count - 1);

    //     }
    // }

    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">
                    {
                        values.map((prod,index) => (
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
                                                wishlist.some((p)=>p.id===prod.id) ? (<i key={index} className="fa-solid fa-heart fa-xl" onClick={()=>{
                                                    dispatch({
                                                        type:"Remove_from_wishlist",
                                                        payload: prod,
                                                    })
                                                }} style={{ color: "#f51414" }}></i>) : (
                                                <i key={index} className="fa-regular fa-heart fa-xl" onClick={()=>{
                                                    dispatch({
                                                        type:"Add_to_wishlist",
                                                        payload: prod,
                                                    })
                                                }} style={{ color: "#f51414" }}></i>)
                                            }

                                        </span>
                                        {
                                            cart.some((p)=>p.id===prod.id) ? (<button className='remove_btn' onClick={()=>{
                                                dispatch({
                                                    type:"Remove_from_cart",
                                                    payload: prod,
                                                })
                                            }}>Remove</button>) : (<span><i className="fa-solid fa-bag-shopping fa-xl " onClick={()=>{
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
