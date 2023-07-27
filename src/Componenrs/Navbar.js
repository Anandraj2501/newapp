import React from 'react';
import './Css/navbar.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

export default function Navbar() {
    let [open, setOpen] = useState(false);
    const handleopenclick = ()=>{
        if(open === false){
            setOpen(true); 
        }
        else{
            setOpen(false);
        }
        console.log("open");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm bg-dark pb-2 pt-2 ">
                <div className="container-fluid ">
                    <a className="navbar-brand  text-light fw-semibold" href="/">Famazon</a>

                    
                    <div className="searchbox search-box ">
                        <input className="form-control mr-sm-2 me-1 col-sm-8 rounded" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary font-weight-bold my-2 my-sm-0" type="submit">Search</button>
                    </div>
                    <div className='icons'>
                        <span className="p-1 me-3"><i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#ffffff" }}><sup>1</sup></i></span>
                        <span className="p-1"><i class="fa-solid fa-heart fa-xl" style={{color: "#ffffff"}}></i></span>
                        <span className='p-1 hamburger'>
                        <i className="fa-solid fa-bars fa-xl" onClick={handleopenclick} style={{color: "#ffffff"}}></i></span>
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
            <div className={`sidebar ${open === true ? "sidebaractive" : ""}`}>
                <a href="/">Mobiles</a>
                <a href="/">Tablets</a>
                <a href="/">Laptops</a>
                <a href="/">Grocery</a>
            </div>
        </div>
    )
}
