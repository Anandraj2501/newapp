
import './App.css';
import Navbar from './Componenrs/Navbar';
import Main from './Componenrs/Main';
import SAMSUNG from "./Componenrs/Samsung";
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { CountContext } from './CountContext.js';
import Asus from "./Componenrs/Asus";
import Iphone from "./Componenrs/Iphone";
import Redmi from "./Componenrs/Redmi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Cart from './Componenrs/Cart';

function App() {
  // const [heartcolor,setHeartcolor] = useState(()=> handleclick);
  const [count, setCount] = useState(0);

  //   const handleclick = (e)=>{
  //     if(e.target.className=="fa-regular fa-heart fa-xl"){
  //         console.log(e.target.className);
  //         e.target.className="fa-solid fa-heart fa-xl";
  //         setCount(count+1);
  //     }
  //     else{
  //         e.target.className="fa-regular fa-heart fa-xl";
  //         setCount(count-1);
  //     }

  // }
  return (
    <div className="App">
      <Router>
        <CountContext.Provider value={[count, setCount]}>
        <Navbar/>
        <div className='main'>
          <Routes>
            <Route path='*' exact element={<Main/>}></Route>
            <Route path='/Cart' exact element={<Cart />}></Route>
          </Routes>
        </div>
        </CountContext.Provider>

      </Router>
    </div>
  );
}

export default App;
