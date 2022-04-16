import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
