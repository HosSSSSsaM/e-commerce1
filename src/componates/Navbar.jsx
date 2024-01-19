import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from 'react-redux'
import { IoSearch } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import Cart_hover from './Cart_hover'
import img from "../lap_images/5.jpg"

function Navbar(props) {


  const [active , setActive] = useState("home")
  const cart = useSelector((state)=>state.cart.length)
  console.log(cart);

  document.onscroll=function(){
    if(window.scrollY>10){
      document.querySelector("nav").style.boxShadow = "#ab3550 2px 2px 5px -1px, #ab3550 2px 1px 3px -1px"
      document.querySelector("nav").style.background= "linear-gradient(to right, #ab3550 ,#ab3550, #eeebeb , #fff )"
      document.querySelector(".navbar-brand").style.borderColor = "#fff"
      document.querySelector(".navbar-brand").style.color = "#fff"
    }else{
      document.querySelector("nav").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      document.querySelector("nav").style.background="#fff"
      document.querySelector(".navbar-brand").style.borderColor = "#ab3550"
      document.querySelector(".navbar-brand").style.color = "#ab3550"

    }
  }
  return (
<>  
    <div className='navv'>


<div className="top_nav ">
  <div className="left_topnav">
    <span><FaTruckFast/></span>
    <p>Free Shopping When YOur Cart Upto $1000</p> 
  </div>
  <div className="right_topnav">
    <Link to="/login" className='login_btn'>
      <span><IoIosLogIn/></span>
      <p>login</p>
    </Link>
    <span>|</span>
    <h6>Hossam Ahmed</h6>
  </div>
</div>
<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">Bazzar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* {props.dark ? <BiSun className='links fs-5' onClick={props.isdark}/> : <BsMoonStarsFill className='links fs-5' onClick={props.isdark}/>} */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link to="/" onClick={()=>{setActive("home")}} className={active==="home" ? " links active" : "links" } >Home</Link>
        <a href='#about' onClick={()=>{setActive("about")}} className={active==="about" ? " links   active" : "  links" }  >About</a>
        <Link to="/product" onClick={()=>{setActive("product")}} className={active==="product" ? " links  active" : "links " }  >Prodcuts</Link>
        <a href='#contact' onClick={()=>{setActive("contact")}} className={active==="contact" ? " links  active" : "links " }  >Contact</a>
        <Link to="/cart" onClick={()=>{setActive("cart")}} className={active==="cart" ? " links  active" : "links " }  >Cart</Link>
        
        <div className='yarabnkhles'>
            <AiOutlineShoppingCart className="shoppingCart" />
            <span className='spn'>{cart}</span>
            <Cart_hover/>
        </div>
      </ul>

    </div>
  </div>
</nav>

    </div>

    
  </>
  )
}

export default Navbar