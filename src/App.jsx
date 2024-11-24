import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compo/Header'
import Product from './compo/Product'
import Home from './compo/Home'
import Blog from './compo/Blog'
import Service from './compo/Service';
import Login from './compo/Login';
import About from './compo/About';
import Header from './compo/Header';


function App() {
  
  return (
        <> 
          
          
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/product" element={<Product />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              
            </Routes>
          
          
        </>
  )
}

export default App
