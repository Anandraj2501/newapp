import React ,{useState} from 'react';
import './Css/main.css';
import {
    Link,
    Outlet
} from "react-router-dom";
import Singleproductlaptop from './Singleproductlaptop';


export default function Laptop() {
    const [prod_name,setprod_name] = useState("dell");

    return (
        <>
            <div className="main">
                <span className="heading">Laptops</span>
                <div className="mainwrapper">
                    <div className="brand-names-container">
                    
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("dell")}>Dell</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("Apple")}>Apple</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("Asuslaptop")}>ASUS</Link>
                        <Link className="brand-names" to="/" onClick={()=>setprod_name("Acer")}>Acer</Link>

                    </div>
                    <Outlet />
                    <hr />
                        
                    <Singleproductlaptop prod={prod_name}/>


                </div>
            </div>

        </>
    )
}
