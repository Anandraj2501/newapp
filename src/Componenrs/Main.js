import React, { useState } from 'react';
import './Css/main.css';
import Iphone from './Iphone';
import Asus from './Asus';
import Redmi from './Redmi';
import SAMSUNG from './Samsung';
import { ColorContext } from '../CountContext';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Outlet
} from "react-router-dom";


export default function Main() {
    const [appstate, setAppstate] = useState({
        object: [{ sheartcolor: true },
        { sheartcolor: true },
        { sheartcolor: true },
        { sheartcolor: true }],

        object2: [{ iheartcolor: true },
        { iheartcolor: true },
        { iheartcolor: true },
        { iheartcolor: true }],

        object3: [{ aheartcolor: true },
        { aheartcolor: true },
        { aheartcolor: true },
        { aheartcolor: true }],

        object4: [{ rheartcolor: true },
        { rheartcolor: true },
        { rheartcolor: true },
        { rheartcolor: true }]
    });
    

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
                    <Outlet />
                    <hr />
                    <ColorContext.Provider value={{appstate, setAppstate}}>
                        <Routes>
                            <Route path='/' exact element={<SAMSUNG />} />
                            <Route path='/iphone' exact element={<Iphone />}>
                            </Route>
                            <Route path='/asus' exact element={<Asus />}>
                            </Route>
                            <Route path='/redmi' exact element={<Redmi />}>
                            </Route>
                        </Routes>
                    </ColorContext.Provider>



                </div>
            </div>

        </>
    )
}
