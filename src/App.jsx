import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './componates/Navbar'
import Home from './componates/Home'
import About from './componates/About'
import Products from './componates/Products'
import Contact from './componates/Contact'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProductDetails from './componates/ProductDetails'
import Cart from './componates/Cart'
import Footer from './componates/Footer'
import Login from './componates/Login'
import TOTOP from './componates/TOTOP'


function App() {
  let url = "https://dummyjson.com/products";
   const [dark , setDark] = useState(false)
   const [cart , setCart] = useState([]);


   function isdark() {
    setDark(!dark)
   }
   function click(){
    document.querySelector(".toggelCart").classList.toggle("toggle");
  }


  function tocart(show){
    fetch(`${url}/${show.id}`)
    .then(res => res.json())
    .then ((data) => setCart(data))
  }  

 

  return (
    <div className={dark ? "dark" : null}>

    <BrowserRouter >
          <Navbar dark={dark} isdark={isdark} click={click}/> 
    <Routes>

        <Route path='' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/product' element={<Products dark={dark} tocart={tocart}/>} />
        {/* <Route path='/contact' element={<Contact/>} /> */}
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      
    </Routes>
        <Footer/>
    </BrowserRouter>
    <TOTOP/>

    </div>
  )
}

export default App
