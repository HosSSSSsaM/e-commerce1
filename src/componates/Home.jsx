import React, { useEffect, useState } from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { FaAnglesDown } from "react-icons/fa6";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { TiArrowRightThick } from "react-icons/ti";
import { FaHandPointRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import CountUP from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add_to_cart } from './r-toolkit/Cart_slices';
import { Link } from 'react-router-dom'
import img from "../charkter_images/716FB2r2V+L.SS700.jpg"
import img1 from '../lap_images/2.jpg'
import img2 from '../lap_images/1.jpg'
import char_img1 from '../charkter_images/1.jpg'
import char_img2 from '../charkter_images/2.jpg'


function Home() {

const dispatch = useDispatch()
const [counteron , setcounteron] = useState(false)
const [product , setProduct] = useState([]);
let url = "https://dummyjson.com/products";

function getproduct(){
  fetch(`${url}`)
  .then((res) => res.json())
  .then ((data) => setProduct(data.products) )
 } 

useEffect(()=>{
  getproduct()
}, [])
const responsive = {
superLargeDesktop: {
  // the naming can be any, depends on you.
  breakpoint: { max: 4000, min: 3000 },
  items: 5
  
},
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 3
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1
}
};
  return (
    <div>


<header>
  <div className='container'>
    <div className='header_details'>
      <h1>We have The best note book collection in 2024</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil animi autem similique! Atque numquam, in architecto vero itaque dolores nobis sequi animi, vitae esse non hic quibusdam aliquid? Corporis.</p>
      <div className='header_btns'>
        <button className='btn btn-primary'> Order now < BsCartCheckFill/> </button>
        <button className='btn btn-light'> Learn more< FaAnglesDown/> </button>
      </div>
    </div>
    <div className='header_img'>
      <img src={img} alt="" />
    </div>
  </div>
</header>



<ScrollTrigger onEnter={()=>{setcounteron(true)}} onExit={()=>{setcounteron(false)}} >
<div className="running_numbers">
    <div>
        {/* <h4 className='h4_one'>{x_one}+</h4> */}
        <h4> {counteron && <CountUP  start={0} end={1557} duration={1}/> }+ </h4>
        <p>Savings</p>
    </div>
    <div>
    <h4> {counteron && <CountUP  start={0} end={2687} duration={2}/> }+ </h4>
        <p>Photos</p>
    </div>
    <div>
    <h4> {counteron && <CountUP  start={0} end={7551} duration={3}/> }+ </h4>
        <p>Rokets</p>
    </div>
    <div>
    <h4> {counteron && <CountUP  start={0} end={1339} duration={4}/> }+ </h4>
        <p>Globes</p>
    </div>
</div>
    </ScrollTrigger>




<section className="container">
<h2 className='maintitle'> Top Products </h2>
<Carousel className='top_products' responsive={responsive} infinite={true}  >

{product && product.slice(5,10).map(function(show){
return(
<div className='cardd' key={show.id}>
  <div className='cardd-img-container'>
    <Link to={`/product/${show.id}`}>
        <img  src={show.thumbnail} alt="Card image cap"/>
    </Link>
  </div>
  <div className="card-body">
      <h5 className="card-title">{show.title &&  show.title.slice(0,15)}</h5>
      <p className=" mt-2"> category : {show.category} </p>
      <p className=""> brand : {show.brand} </p>
      <p className=""> price  <span >{show.price}$</span>  </p>
      <button className='btn btn-primary' onClick={()=>{dispatch(add_to_cart(show))}}>Add to cart            <span><LiaCartArrowDownSolid/></span> </button>
  </div>
</div>
)
})}


</Carousel>;
<Link to="/product" className='go_to_see_more'> click to see more products <TiArrowRightThick className='right'/> </Link>
</section>


<div id="about"></div>
<section className='container about' >
<h2 className='maintitle'> About Us </h2>
  <div className="sec_one">
    <img src={img2} alt="" />
    <div>
      <h4>We pride ourselves on Providing the best types of Note Books All Over The World.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
      <button className='btn btn-danger'>Learn More</button>
    </div>
  </div>
  <hr />
  <div className="sec_one">
    <div>
      <h4>We do everything to reach the maximum possible level of technological development.</h4>
      <h5>< FaCheck className='check' /> Etiam sed dolor ac diam volutpat. </h5>
      <h5>< FaCheck className='check' /> Erat volutpat aliquet imperdiet. </h5>
      <h5>< FaCheck className='check' /> purus a odio finibus bibendum. </h5>
      <button className='btn btn-danger'>Learn More</button>
    </div>
    <img src={img1} alt="" />
  </div>

</section>



<section className='slider_blogs'>
  <h2>Testimonials</h2>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">


    <div className="carousel-item active">=
      <img src={char_img1} className="d-block " />
      <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
      <h6>maccy doe,full stack developer</h6>
    </div>

    <div className="carousel-item">
      <img src={char_img2} className="d-block " />
      <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
      <h6> mike ederson,frontend developer </h6>
    </div>

    <div className="carousel-item">
      <img src={char_img1} className="d-block " />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas temporibus optio quis quos, eum, quam voluptatum consequatur fuga dignissimos eaque, non exercitationem est harum ab! Molestias commodi vel iusto?</p>
      <h6>mike ederson, full stack developer</h6>
    </div>


  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>



<section className='container quastions'>
  <h2 className='maintitle'>Frequently Asked Questions</h2>
  <div className='mother'>
    <div>
      <h5><FaHandPointRight className='handfinger'/> How many times have you upgraded your computer? </h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad natus rerum molestias quasi itaque? Voluptatum doloribus sit, earum laboriosam architecto obcaecati ullam perspiciatis eaque aspernatur maiores nesciunt fuga dolor maxime!</p>
    </div>
    <div>
      <h5><FaHandPointRight className='handfinger'/> What do you think about computer- related jobs? </h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad natus rerum molestias quasi itaque? Voluptatum doloribus sit, earum laboriosam architecto obcaecati ullam perspiciatis eaque aspernatur maiores nesciunt fuga dolor maxime!</p>
    </div>
    <div>
      <h5><FaHandPointRight className='handfinger'/> What do you like about Evernote versus OneNote?</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad natus rerum molestias quasi itaque? Voluptatum doloribus sit, earum laboriosam architecto obcaecati ullam perspiciatis eaque aspernatur maiores nesciunt fuga dolor maxime!</p>
    </div>
    <div>
      <h5><FaHandPointRight className='handfinger'/> Technology is a useful servant but a dangerous master.</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad natus rerum molestias quasi itaque? Voluptatum doloribus sit, earum laboriosam architecto obcaecati ullam perspiciatis eaque aspernatur maiores nesciunt fuga dolor maxime!</p>
    </div>
  </div>
</section>

<section className='wise'>

    <p><FaAnglesRight className='finger_right'/> Just Beleive in your self and every thing gonna be fine later  <FaAnglesLeft className='finger_left'/></p>
    <button className='btn btn-primary'>Learn more</button>

</section>



<div id="contact"></div>
<section className='container contact'>
  <h3 className='maintitle'> contact us </h3>
  <div className="subscribe">
    <h4>Hurry up! Subscribe our newsletter and get 25% Off</h4>
    <p>Limited time offer for this month. No credit card required.</p>
    <div className='inputandbtn'>
      <form action="">
        <div className="form-group">
            <div className="form-label-group">
                  <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" />
            </div>
        </div>

      </form>
      <button className='btn btn-primary'>subscribe</button>
    </div>
  </div>
  <div className="sec_two">
      <h5>waiting for your message...</h5>
      <div>
        <input className="form-control" type="text" placeholder='Name' />
        <input className="form-control" type="text" placeholder='phone' />
      </div>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required"/>
      <textarea className="form-control" placeholder='Enter your message' cols="20" rows="10"></textarea>
      <button className='btn btn-danger'>Send</button>
  </div>
</section>



</div>

  )
}

export default Home