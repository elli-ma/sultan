import { useState } from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from "./components/card/Card"

import data from './assets/products.json'

import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import ProductsCard from './pages/ProductsCard';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/sultan/catalog" element={<Catalog catalog={data.catalog} category={data.categories[0]}/>} />
        <Route path ="/sultan/cart" element={<Cart/>} />
        <Route path="/sultan/catalog/:productId" element={<ProductsCard products={data.catalog}/>} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  )


}

export default App;
