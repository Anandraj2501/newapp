
import React from 'react';
import './Css/main.css';
import { useContext } from 'react';
import { CountContext } from '../CountContext';

export default function Iphone() {
    const [count,setCount] = useContext(CountContext);
    const handleclick = (e)=>{
        if(e.target.className=="fa-regular fa-heart fa-xl"){
            console.log(e.target.className);
            e.target.className="fa-solid fa-heart fa-xl";
            setCount(count+1);
        }
        else{
            e.target.className="fa-regular fa-heart fa-xl";
            setCount(count-1);
        }

    }
    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">
                    <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Redmi</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Redmi</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Redmi</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Redmi</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
