import { useState } from 'react';
import './App.scss';
import Products from "./components/products/Products"
import Footer from './components/footer/Footer';
import data from "./assets/products.json"

function App() {


  return (
    <div className="App">
      <Products data={data}/>   
      <Footer/>    
       </div>
  )
    
   
}

export default App;
