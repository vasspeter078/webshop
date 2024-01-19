import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Shopping from './pages/Shopping.js';
import Cart from './pages/Cart.js';

export const CartContext = createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={[]}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
