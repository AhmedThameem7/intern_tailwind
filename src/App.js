import React from 'react';
import Header from './header';
import Footer from './Footer';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Main from './Main';
import Login from './Login'
import Newuser from './Newuser'
import Cart from './Cart'

import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router> {/* This should only be here */}
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/newuser' element={<Newuser />}></Route>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

