import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="navigation"> <Navbar/> </div>
      <div className="content"> <Home/> </div>
    </div>
  );
}

export default App;
