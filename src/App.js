import React, { useState } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Checkout from './pages/checkout';


import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  const [cart, setCart] = useState([])
  const [cartLength, setCartLength] = useState(0)
  
  const addToCart = (product) =>{
   
      setCart([...cart, product ])
      setCartLength(cartLength + 1)
  }

  const cartTotalPrice = () =>{
      return cart.reduce((total, item) => total + item.price, 0)
  }


  console.log(cart)
  return (
    <BrowserRouter>
      <Nav cartLength={cartLength} totalPrice={cartTotalPrice()}/>
      <Routes>
       
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        <Route path='/' element={<Landing addToCart={addToCart} />} />
        <Route path='/products' element={<Product addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} cartLength={cartLength} totalPrice={cartTotalPrice()}/>}/>
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
