
import './App.css';
import Navbar from './Componenrs/Navbar';
import Main from './Componenrs/Main';
import Anotherpage from './Componenrs/Anotherpage';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main/>
      </Router>
    </div>
  );
}

export default App;
