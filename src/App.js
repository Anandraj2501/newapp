
import './App.css';
import Navbar from './Componenrs/Navbar';
import Main from './Componenrs/Main';
import samsung from "./Componenrs/Samsung";
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { CountContext } from './CountContext.js';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
}from "react-router-dom";

function App() {
  // const [heartcolor,setHeartcolor] = useState(()=> handleclick);
  const [count,setCount] = useState(0);
  
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
        <CountContext.Provider value={[count,setCount]}>
        <Navbar count={count}/>
        <Main/>
        </CountContext.Provider>
      </Router>
    </div>
  );
}

export default App;
