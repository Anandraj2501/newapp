import React, { useState } from 'react';
import './Css/main.css';
import Singleproductphones from './Singleproductphones';



import {
    Link,
    Outlet
} from "react-router-dom";


export default function Main() {
    const [prod_name,setprod_name] = useState("samsung");

    // const handleclick = (name)=>{
    //     prod_name = name;
    //     console.log(name);
    // }
    return (
        <>

            <div className="main">
                <span className="heading">Mobiles</span>
                <div className="mainwrapper">
                    <div className="brand-names-container">
                    
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("samsung")}>SAMSUNG</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("iphone")}>IPhones</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("asus")}>ASUS</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("redmi")}>Redmi</Link>

                    </div>
                    <Outlet />
                    <hr />
                        <Singleproductphones prod={prod_name}/>
                        {/* <Routes>
                            <Route path='/' exact element={<SAMSUNG />} />
                            <Route path='/Iphone' exact element={<Iphone />}>
                            </Route>
                            <Route path='/Asus' exact element={<Asus />}>
                            </Route>
                            <Route path='/Redmi' exact element={<Redmi />}>
                            </Route>
                        </Routes> */}



                </div>
            </div>
            
            
        </>
    )
}
