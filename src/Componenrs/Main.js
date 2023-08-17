import React from 'react';
import './Css/main.css';
import Iphone from './Iphone';
import Asus from './Asus';
import Redmi from './Redmi';
import SAMSUNG from './Samsung';

import {
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
                    
                        <Link className="brand-names" to="/">SAMSUNG</Link>
                        <Link className="brand-names" to="/Iphone">IPhones</Link>
                        <Link className="brand-names" to="/Asus">ASUS</Link>
                        <Link className="brand-names" to="/Redmi">Redmi</Link>

                    </div>
                    <Outlet />
                    <hr />
                        <Routes>
                            <Route path='/' exact element={<SAMSUNG />} />
                            <Route path='/Iphone' exact element={<Iphone />}>
                            </Route>
                            <Route path='/Asus' exact element={<Asus />}>
                            </Route>
                            <Route path='/Redmi' exact element={<Redmi />}>
                            </Route>
                        </Routes>



                </div>
            </div>

        </>
    )
}
