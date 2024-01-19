import React from 'react'
import { HiMiniChevronDoubleUp } from "react-icons/hi2";




function TOTOP() {


    document.onscroll = function(){
        if(window.scrollY > 400){
            document.querySelector(".to_top").style.display = "block"
        }else{
            document.querySelector(".to_top").style.display = "none"
        }
    } 
    function tothe_top(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
        } 
  return (
       <div className="to_top" onClick={()=>tothe_top()}>
            <HiMiniChevronDoubleUp className='topshit'/>
    </div> 

  )
}

export default TOTOP