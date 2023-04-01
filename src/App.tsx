import { useState } from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from "./components/card/Card"

import data from './assets/products.json'
import Cart from './pages/Cart';

import './App.scss';
import Catalog from './pages/Catalog';

function App() {

  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/sultan/catalog" element={<Catalog catalog={data.catalog} category={data.categories[0]}/>} />
        <Route path ="/sultan/cart" element={<Cart cart={data.catalog}/>} />
        <Route path="/sultan/catalog/:productId" element={<Card product={data.catalog[0]}/>} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  )


}

export default App;
