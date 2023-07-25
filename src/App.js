
import './App.css';
import Navbar from './Componenrs/Navbar';
import Main from './Componenrs/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Anotherpage from './Componenrs/Anotherpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />

        <Routes>
          <Route path='/Anotherpage' element={<Anotherpage/>}>
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
