import React, { useContext } from 'react';
import {CountContext} from '../CountContext';

export default function Searchpage() {
    const {
        state: { cart,searchcart},
        dispatch,
    } = useContext(CountContext);
    console.log(searchcart);
    // function handleclick(index) {
    //     console.log("chlra hai");
    //     if (prod.sheartcolor === true) {
    //         prod.sheartcolor = false;
    //         console.log("chlra 1hai");
    //         console.log("onclick");
    //         setCount(count + 1);
    //     }
    //     else {
    //         prod.sheartcolor = true;
    //         console.log("chlra2 hai");
    //         setCount(count - 1);

    //     }
    // }
    return (
        <div className='cart'>
            <div className='cart-wrapper'>
                {
                    searchcart.length > 0 ? (
                        searchcart.map((prod, index) =>
                        (
                            <div key={index} className="card-container">
                                <span className='brand-container'>
                                    <img src={prod[index].src} alt="img" className='brand-img' />
                                </span>
                                <div className="brand-info">
                                    <span className='name'>{prod[index].name}</span>
                                    <span className='price'>Rs {prod[index].price}</span>
                                    <div className="buy">
                                        <span>


                                            <i key={index} className="fa-regular fa-heart fa-xl" style={{ color: "#f51414" }}></i>


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
                            </div>))
                    ) : (<div>No item</div>)
                }
            </div>
        </div>
    )
}
