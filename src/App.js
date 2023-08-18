
import './App.css';
import Navbar from './Componenrs/Navbar';
import Main from './Componenrs/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Cart from './Componenrs/Cart';
import Searchpage from './Componenrs/Searchpage';
import Wishlist from './Componenrs/Wishlist';

function App() {
  // const [heartcolor,setHeartcolor] = useState(()=> handleclick);
  

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
        <Navbar/>
        <div className='main'>
          <Routes>
            <Route path='*' exact element={<Main/>}></Route>
            <Route path='/Cart' exact element={<Cart />}></Route>
            <Route path='/Searchpage' exact element={<Searchpage />}></Route>
            <Route path='/Wishlist' exact element={<Wishlist />}></Route>
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
