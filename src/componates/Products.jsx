import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {BsShopWindow} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
// import { fetchproduct  s } from './r-toolkit/Product_slices';
import { add_to_cart } from './r-toolkit/Cart_slices';
function Products(props) {

  const dispatch = useDispatch()
  // const products = useSelector((state)=>state.products)
    let url = "https://dummyjson.com/products";
    const [product , setProduct] = useState([]);
    const [ category , setCategory] = useState([]);
    // const [cart , setCart] = useState([]);

     function getproduct(){
      fetch(`${url}`)
      .then((res) => res.json())
      .then ((data) => setProduct(data.products) )
     } 


    function categoory(){
      fetch(`${url}/categories`)
      .then(res => res.json())
      .then(Category => setCategory(Category));
    } 

        function getcategory(name){
        console.log(name);
        fetch(`${url}/category/${name}`)
        .then(res => res.json())
        .then(json => setProduct(json.products))
    }

    
     useEffect(()=>{
        // dispatch(fetchproducts())
        getproduct()
        categoory()
      }, [])


  
  return (
    <>
    
    <div className='products mt-5'>
    <div className='title'>
        <h2> the shop  <BsShopWindow/></h2>
        <hr />
      </div>
      <div className='btns ms-auto  '>
          <button className={props.dark ? 'mainbtn btn btn-light ' : 'mainbtn btn btn-primary '} onClick={ ()=>{
            getproduct()
          }}>All products</button>
          <div className='allbtns'>
              {category.map(function(el){
                    return(
                        <button  key={el} className='otherbtns btn btn-outline-primary' onClick={()=>{
                            getcategory(el)
                        }}>{el}</button>
                    )
                })}
            </div>
      </div>
        <div className='container'>
          <div className='row'>
                {product && product.map(function(show){
                  return(
                    <div className=' col-lg-4 col-md-6 col-sm-12'  key={show.id}>
                      <div className='cardd mt-3'>
                          <img className="card-img-top" src={show.thumbnail} alt="Card image cap"/>
                          <div className="card-body">
                              <h5 className="card-title">{show.title &&  show.title.slice(0,15)}</h5>
                              <p className=" mt-2"> category : {show.category} </p>
                              <p className=""> brand : {show.brand} </p>
                              <p className=""> price  <span >{show.price}$</span>  </p>
                              <Link to={`/product/${show.id}`}   className="button-click mt-3">more details</Link>
                              <button  onClick={()=>dispatch(add_to_cart(show))} className="button-click" >add to cart</button>
                          </div>
                      </div>
                   </div>
                  )
                })}
          </div>
        </div>
    </div>

    </>
  )
}

export default Products