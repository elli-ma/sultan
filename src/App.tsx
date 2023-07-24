import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import "./assets/iconfont/iconsstyles.css"

function App() {

  return (
    <div className="App">
      <Header />
      <div className="vis">
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
