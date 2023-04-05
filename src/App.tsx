import { useState } from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from "./components/card/Card"
import './App.scss';
import "./assets/iconfont/iconsstyles.css"

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
