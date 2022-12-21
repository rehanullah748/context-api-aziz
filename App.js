import React, { createContext, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MystoreProvider from "./Store/Mystore";
import Product from "./Components/Product";
import Details from "./Components/Details";
import Nav from "./Components/Nav";
import CartItems from "./Components/CartItems";

function App() {


  return (
    <BrowserRouter>
    
    <MystoreProvider>
    <Nav/>
    <Routes>
      
      <Route path="/" element = {<Product/>}/>
      <Route path="/product/:id" element= {<Details />}/>
      <Route path="/CartItems" element = {<CartItems/>}/>
      
    </Routes>
    
    
   
    </MystoreProvider>
    </BrowserRouter>
  );
}

export default App;
