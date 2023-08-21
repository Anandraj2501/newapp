import React from 'react';
import './Css/navbar.css';
import { useContext } from 'react';
import {
    Link
} from "react-router-dom";
import { CountContext } from '../CountContext';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    const { count } = useContext(CountContext);
    console.log(count);
    const {
        state: { cart,wishlist},
        dispatch
    } = useContext(CountContext);
    



    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm bg-dark pb-2 pt-2 ">
                <div className="container-fluid ">
                    <Link className="navbar-brand  text-light fw-semibold" to="/">Famazon</Link>


                    <div className="searchbox search-box ">

                        <input className="form-control mr-sm-2 me-1 col-sm-8 rounded" type="search" placeholder="Search on famazon" aria-label="Search" onChange={(e) => {
                            console.log(e.target.value);
                            dispatch({
                                type: "search",
                                payload: e.target.value,
                            })
                        }} />
                        <Link to="/Searchpage"><Button variant="outline-primary">Search</Button></Link>
                    </div>
                    <div className='icons'>
                        <Link className="p-1 me-3" to="/Cart"><i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#ffffff" }}><sup>{cart.length}</sup></i></Link>
                        <Link to="/Wishlist" className="p-1 me-3"><i className="fa-solid fa-heart fa-xl" style={{ color: "#ffffff" }}><sup>{wishlist.length}</sup></i></Link>
                        {/* <span className='p-1 hamburger'>
                            <i className="fa-solid fa-bars fa-xl" onClick={handleopenclick} style={{ color: "#ffffff" }}></i></span> */}
                    </div>
                </div>

            </nav>

            <div className="catalogue  shadow-lg" >
                <div className="catalogue_container d-flex  justify-content-between">
                    <div className="item p-2 mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100" alt="items" />
                        </span>
                        <div className="item-name">
                            <Link className='item-name' to="/Anotherpage">Top offers</Link>
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img  ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" alt="items" />
                        </span>
                        <div className="item-name">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img  ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3a39bad95503b051.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img  ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e83a5f27b01d9a7e.png?q=100" alt="items" />
                        </span>
                        <div className="item-name">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img  ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/a8cfa33c7206ae57.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4e0bdf8567ecb960.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item  p-2  mt-2 mb-2">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/def8193d5a7380ee.png?q=100" alt="items" />
                        </span>
                        <div className="item-name ">
                            Top Offers
                        </div>
                    </div>

                    <div className="item p-2  mt-2 mb-2 ">
                        <span className="img-container d-block">
                            <img className='img ' src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100" alt="items" />
                        </span>
                        <div className="item-name">
                            Top Offers
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`sidebar ${open === true ? "sidebaractive" : ""}`}>
                <Link to="/cart">Cart</Link>
                <Link to="/cart">Wishlist</Link>
                
            </div> */}

        </div>
    )
}
