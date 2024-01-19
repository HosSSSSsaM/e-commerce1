import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";

function Footer() {
    let date = new Date()
    let year = date.getFullYear()
    

  return (


<footer>
    <div className="container">
        <div className="frist_div">
            <a href="">register</a>
            <a href="">Products</a>
            <a href="">Cart</a>
            <a href="">about us</a>
            <a href="">Follow us</a>
        </div>
        <div className="second_div">
            <a href=""><FaFacebookF/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><TfiYoutube/></a>
            <a href=""><BsInstagram/></a>
            <a href=""><TfiLinkedin/></a>
        </div>
        <p>Copyright © {year} .All rights reserved by... <span>Hossam Ahmed</span>.</p>
    </div>




</footer>




  )
}

export default Footer