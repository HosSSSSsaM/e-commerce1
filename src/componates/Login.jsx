import React from 'react'
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Login() {

    // let co_form = document.querySelector(".co_form")
    // let regestire = document.querySelector("#regestire")
    // let login = document.querySelector("#login")

    // regestire.onclick = function(){

        function regestiree(){
            document.querySelector(".co_form").classList.add("active")
        }
    // }
    // login.onclick = function(){

        function loginn(){
            document.querySelector(".co_form").classList.remove("active")
        }
    // }

  return (
    <div className='testt'>


<div className="container foorm">
    <div className="co_form">

        <div className="form_countainer sign_up">
            <form >
                <h2>creat account</h2>
                <div className="social_icons">
                    <a href="#"><IoLogoGoogleplus/></a>
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaGithub/></a>
                    <a href="#"><FaLinkedinIn/></a>
                </div>
                <span> or use ur eamil fo regestiration</span>
                <input type="text" placeholder="Enter ur name"/>
                <input type="email" placeholder=" Enter ur eamil"/>
                <input type="password" placeholder="Enter ur password"/>
                <button type="submit " className="oneee"> sign up</button>
            </form>
        </div>
    
        <div className="form_countainer sign_in">
            <form >
                <h2>sign in</h2>
                <div className="social_icons">
                    <a href="#"><IoLogoGoogleplus/></a>
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaGithub/></a>
                    <a href="#"><FaLinkedinIn/></a>
                </div>
                <span> or use ur eamil & password</span>
                <input type="email" placeholder=" Enter ur eamil"/>
                <input type="password" placeholder="Enter ur password"/>
                <a href="#" className='forget'>forget your password ?</a>
                <button type="submit " className="twooo"> sign in</button>
            </form>
        </div>
    
        <div className="toggel_countainer">
            <div className="toggel">
                <div className="toggel_panal left">
                    <h2>welcome back !</h2>
                    <p>Enter your personal details to use all site features</p>
                    <button className="hidden" onClick={()=>loginn()} id="login"> sigin in</button>
                </div>
                <div className="toggel_panal right">
                    <h2>Hello friend !</h2>
                    <p>regestire with personal details to use all site features</p>
                    <button className="hidden" onClick={()=>regestiree()} id="regestire"> sign up</button>
                </div>
            </div>
        </div>
    
    </div>
</div>
</div>

  )
}

export default Login