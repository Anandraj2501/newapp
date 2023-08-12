
import React from 'react';
import './Css/main.css';
import { useContext } from 'react';
import { CountContext,ColorContext } from '../CountContext';

export default function Iphone() {
    const [count,setCount] = useContext(CountContext);

    const { appstate, setAppstate } = useContext(ColorContext);

    let values = appstate.object4;
    console.log(values);
    function handleclick(index) {
        console.log("chlra hai");
        if (values[index].rheartcolor == true) {
            values[index].rheartcolor = false;
            console.log("chlra 1hai");
            setCount(count + 1);
        }
        else {
            values[index].rheartcolor = true;
            console.log("chlra2 hai");
            setCount(count - 1);

        }
    }

    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">

                {
                        Object.keys(values).map((index) => (
                            <div key={index} className="card-container">
                                <span className='brand-container'>
                                    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70" alt="img" className='brand-img' />
                                </span>
                                <div className="brand-info">
                                    <span className='name'>Redmi</span>
                                    <span className='price'>Rs 45000</span>
                                    <div className="buy">
                                        <span>

                                            {
                                                values[index].rheartcolor ? (<i key={index} className="fa-regular fa-heart fa-xl" onClick={() => { handleclick(index) }} style={{ color: "#f51414" }}></i>) :
                                                    (<i key={index} className="fa-solid fa-heart fa-xl" onClick={() => { handleclick(index) }} style={{ color: "#f51414" }}></i>)
                                            }

                                        </span>
                                        <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {/* <div className="card-container">
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
                    </div> */}
                </div>

            </div>
        </div>
    )
}
