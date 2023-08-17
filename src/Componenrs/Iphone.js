import React from 'react';
import './Css/main.css';
import { useContext} from 'react';
import { CountContext } from '../CountContext';

export default function Iphone() {
    const {count, setCount} = useContext(CountContext);
    const {
        state: { cart,appstate },
        dispatch,
      } = useContext(CountContext);
    
    let values = appstate.object2;
    console.log(values);
    function handleclick(index) {
        console.log("chlra hai");
        if (values[index].iheartcolor === true) {
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
                        values.map((prod,index)=>(
                            <div key={index} className="card-container">
                            <span className='brand-container'>
                                <img src={prod.src} alt="img" className='brand-img' />
                            </span>
                            <div className="brand-info">
                                <span className='name'>{prod.name}</span>
                                <span className='price'>Rs {prod.price}</span>
                                <div className="buy">
                                    <span>

                                        {
                                            values[index].iheartcolor ? (<i key={index} className="fa-regular fa-heart fa-xl" onClick={()=>{handleclick(index)}} style={{ color: "#f51414" }}></i>) :
                                                (<i key={index} className="fa-solid fa-heart fa-xl" onClick={()=>{handleclick(index)}}  style={{ color: "#f51414" }}></i>)
                                        }

                                    </span>
                                    {
                                            cart.some((p)=>p.id===prod.id) ? (<button className='remove_btn' onClick={()=>{
                                                dispatch({
                                                    type:"Remove_from_cart",
                                                    payload: prod,
                                                })
                                            }}>Remove</button>) : (<span><i className="fa-solid fa-bag-shopping fa-xl " onClick={()=>{
                                                dispatch({
                                                    type: "Add_to_cart",
                                                    payload: prod,
                                                  })
                                            }}
                                             style={{ color: "#212121" }}></i></span>)
                                        }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
