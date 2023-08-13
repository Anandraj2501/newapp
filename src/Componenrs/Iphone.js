import React from 'react';
import './Css/main.css';
import { useContext,useState } from 'react';
import { ColorContext, CountContext } from '../CountContext';

export default function Iphone() {
    const {count, setCount} = useContext(CountContext);
    const {appstate,setAppstate} = useContext(CountContext);
    
    let values = appstate.object2;
    console.log(values);
    function handleclick(index) {
        console.log("chlra hai");
        if (values[index].iheartcolor == true) {
            values[index].iheartcolor = false;
            console.log("chlra 1hai");
            setCount(count + 1);
        }
        else {
            values[index].iheartcolor = true;
            console.log("chlra2 hai");
            setCount(count - 1);

        }
    }

   

    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">

                    {
                        Object.keys(values).map((index)=>(
                            <div key={index} className="card-container">
                            <span className='brand-container'>
                                <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img' />
                            </span>
                            <div className="brand-info">
                                <span className='name'>Iphones</span>
                                <span className='price'>Rs 45000</span>
                                <div className="buy">
                                    <span>

                                        {
                                            values[index].iheartcolor ? (<i key={index} className="fa-regular fa-heart fa-xl" onClick={()=>{handleclick(index)}} style={{ color: "#f51414" }}></i>) :
                                                (<i key={index} className="fa-solid fa-heart fa-xl" onClick={()=>{handleclick(index)}}  style={{ color: "#f51414" }}></i>)
                                        }

                                    </span>
                                    <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl"  onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" onClick={handleclick}  style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" className='brand-img'/>
                        </span>
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl"  onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="card-container">
                        <img className='brand-img' src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" />
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <img className='brand-img' src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" />
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <img className='brand-img' src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="img" />
                        <div className="brand-info">
                            <span className='name'>Iphone 13</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i class="fa-regular fa-heart fa-xl" style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
