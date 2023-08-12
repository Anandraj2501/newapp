import React, { useContext, useState, useMemo, useEffect } from 'react';
import './Css/main.css';
import Navbar from './Navbar';
import App from '../App';

import { CountContext, ColorContext } from '../CountContext';

export default function Samsung() {
    const [count, setCount] = useContext(CountContext);

    const { appstate, setAppstate } = useContext(ColorContext);

    let values = appstate.object;
    console.log(values);
    function handleclick(index) {
        console.log("chlra hai");
        if (values[index].sheartcolor == true) {
            values[index].sheartcolor = false;
            console.log("chlra 1hai");
            setCount(count + 1);
        }
        else {
            values[index].sheartcolor = true;
            console.log("chlra2 hai");
            setCount(count - 1);

        }
    }

    // const handleclick = (e) => {
    //     // console.log(appstate.object[index])

    //     if (e.target.className === "fa-regular fa-heart fa-xl") {
    //         console.log(e);
    //         // console.log(e.target.key);
    //         console.log(...object);

    //         console.log(values[0].heartcolor);
    //         e.target.className = "fa-solid fa-heart fa-xl";
    //         setAppstate({ ...appstate, heartcolor: e.target.className });
    //         // console.log(appstate);
    //         // e.target.setHeartcolor("fa-solid fa-heart fa-xl");
    //         // setHeartcolor([e.target.className]="fa-solid fa-heart fa-xl");
    //         setCount(count + 1);
    //     }
    //     else {
    //         e.target.className = "fa-regular fa-heart fa-xl";
    //         setAppstate({ ...appstate, heartcolor: e.target.className });
    //         console.log(appstate);
    //         // e.target.setHeartcolor("fa-regular fa-heart fa-xl");
    //         // setHeartcolor( [e.target.className] = "fa-regular fa-heart fa-xl");
    //         setCount(count - 1);
    //     }

    // }

    // useEffect(() => {
    //     localStorage.setItem("values", JSON.stringify(appstate));
    // }, [handleclick])

    // function toggleactive(index){
    //     setAppstate({...appstate,activeObject:appstate.object[index]});
    // }

    // function toggleclass(index){
    //     if(appstate.object[index] === appstate.activeObject){
    //         return "fa-solid fa-heart fa-xl";
    //     }
    //     else{
    //         return "fa-regular fa-heart fa-xl";
    //     }
    // }

    return (
        <div>
            <div className="brand-cards-container">
                <div className="brand-cards-wrapper">
                    {
                        Object.keys(values).map((index) => (
                            <div key={index} className="card-container">
                                <span className='brand-container'>
                                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70" alt="img" className='brand-img' />
                                </span>
                                <div className="brand-info">
                                    <span className='name'>Samsung</span>
                                    <span className='price'>Rs 45000</span>
                                    <div className="buy">
                                        <span>

                                            {
                                                values[index].sheartcolor ? (<i key={index} className="fa-regular fa-heart fa-xl" onClick={() => { handleclick(index) }} style={{ color: "#f51414" }}></i>) :
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
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70" alt="img" className='brand-img' />
                        </span>
                        <div className="brand-info">
                            <span className='name'>Samsung</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i key={0} className="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container'>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70" alt="img" className='brand-img' />
                        </span>
                        <div className="brand-info">
                            <span className='name'>Samsung</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i key={1} className="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70" alt="img" className='brand-img' />
                        </span>
                        <div className="brand-info">
                            <span className='name'>Samsung</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i key={2} className="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <span className='brand-container '>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70" alt="img" className='brand-img' />
                        </span>
                        <div className="brand-info">
                            <span className='name'>Samsung</span>
                            <span className='price'>Rs 45000</span>
                            <div className="buy">
                                <span><i key={3} className="fa-regular fa-heart fa-xl" onClick={handleclick} style={{ color: "#f51414" }}></i></span>
                                <span><i className="fa-solid fa-bag-shopping fa-xl " style={{ color: "#212121" }}></i></span>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
// {(<i key={index} className="fa-regular fa-heart fa-xl" onClick={ ()=> {handleclick(index)}} style={{ color: "#f51414" }}></i>) }