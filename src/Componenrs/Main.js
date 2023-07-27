import React from 'react';
import './Css/main.css';
import Iphone from './Iphone';
import Asus from './Asus';
import Redmi from './Redmi';
import SAMSUNG from './Samsung';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Outlet
} from "react-router-dom";


export default function Main() {

    return (
        <>
            
                <div className="main">
                    <span className="heading">Mobiles</span>
                    <div className="mainwrapper">
                        <div className="brand-names-container">

                            {/* <Link className="brand-names" to="/Samsung">SAMSUNG</Link> */}
                            <Link className="brand-names" to="/Iphone">IPhones</Link>
                            <Link className="brand-names" to="/Asus">ASUS</Link>
                            <Link className="brand-names" to="/Redmi">Redmi</Link>

                        </div>
                        <Outlet/>
                        <hr />
                        <Routes>
                            <Route path='/' element={<SAMSUNG />} />
                            <Route path='/iphone' element={<Iphone />}>
                            </Route>
                            <Route path='/asus' element={<Asus />}>
                            </Route>
                            <Route path='/redmi' element={<Redmi />}>
                            </Route>
                        </Routes>


                    </div>
                </div>
            
        </>
    )
}
