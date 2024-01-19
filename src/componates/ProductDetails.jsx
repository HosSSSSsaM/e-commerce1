import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { add_amount, add_to_cart, claer_all_cart, delete_from_cart, mince_amount } from './r-toolkit/Cart_slices';

function ProductDetails() {

  const [selectedImg , setselectedImg] = useState()

  console.log(selectedImg);
    let params = useParams()
    let url = "https://dummyjson.com/products"
    const [productDetails , setProductDetails] =useState({})
    useEffect(()=>{
        fetch(`${url}/${params.id}`)
        .then(res => res.json())
        .then ((data) => setProductDetails(data))
    } , [])
    const dispatch = useDispatch()
    const cartt = useSelector((state)=>state.cart)
    const newdetails = []
    const setquanity = {...productDetails , quaninty:1}
    newdetails.push(setquanity)
    function to_open_or_hidden(){
        document.querySelector(".amount_btns").classList.add("open_and_hidden")
    }
  return (
    < >
        {newdetails && newdetails.map((product)=>{
            return(
                <div className='container productDetails' key={product.id} >
                    <div className='frist_sec'>
                        <div className='images'>
                            <img onClick={()=>{setselectedImg(product.images && product.images[0])}} src={product.images && product.images[0] }  alt="" />
                            <img onClick={()=>{setselectedImg(product.images && product.images[1])}} src={product.images && product.images[1] }  alt="" />
                            <img onClick={()=>{setselectedImg(product.images && product.images[2])}} src={product.images && product.images[2] }  alt="" />
                            <img onClick={()=>{setselectedImg(product.images && product.images[3])}} src={product.images && product.images[3] }  alt="" />
                        </div>  
                        <div className='effect'>
                            <img className='bigimg' src={selectedImg == null ? product.thumbnail : selectedImg} alt="" />
                        </div>
                    </div>
                    <div className='details'>
                        <h1>{product.title}</h1>
                        <div className='stars'>
                              <p className='mb-0 opacity-100'>Rating ({product.rating})</p>
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiOutlineStar/> 
                        </div>
                        <h3><span> ${product.price}.00 </span> </h3>
                        <h4>discount : <span>{product.discountPercentage}%</span> </h4>
                        <h6>category : {product.category}</h6>
                        <p> discription : {product.description}</p>
                        <div className='details_btn'>
                            <button className='btn btn-primary' onClick={()=>{dispatch(add_to_cart(product)), to_open_or_hidden()}}>Add to cart <span><LiaCartArrowDownSolid/></span> </button>
                            <Link to="/cart" className='btn btn-primary' >Go to cart  <span><FaShoppingBag/></span> </Link>
                        </div>
                    </div>
                </div>
          )})}
        {/* <div className='container productDetails'>
            <div className='images'>
                <img src={productDetails.images && productDetails.images[0] }  alt="" />
                <img src={productDetails.images && productDetails.images[1] }  alt="" />
                <img src={productDetails.images && productDetails.images[2] }  alt="" />
                <img src={productDetails.images && productDetails.images[3] }  alt="" />
            </div>  
            <div className='effect'>
                <img className='bigimg' src={productDetails.thumbnail} alt="" />
            </div>
            <div className='details'>
                <h1>{productDetails.title}</h1>
                <div className='stars'>
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiOutlineStar/> 
                      ({productDetails.rating})
                </div>
                <p>{productDetails.description}</p>
                <h4>discount : <span>{productDetails.discountPercentage}%</span> </h4>
                <h3> final price : <span> {productDetails.price}$ </span> </h3>
                <h6>category : {productDetails.category}</h6>
                <div>
                    <span>+</span>
                    <span>{newdetails.quaninty}</span>
                    <span>-</span>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default ProductDetails