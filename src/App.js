import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Component/Home";
import Header from "./Component/header/Header";
import Cars from "./Component/Cars";
import Company from "./Component/Company";
import Contact from "./Component/Contact"
import ShoppingFavProvider from "./context/ShoppingFavContext";
import Footer from './Component/footer/Footer';

const App = () => {
  return (
    <ShoppingFavProvider>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cars' element={<Cars />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      <Footer />
    </ShoppingFavProvider>
  )
}

export default App

