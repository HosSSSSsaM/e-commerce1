import React from 'react'
import img from "../lap_images/5.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { add_amount, claer_all_cart, delete_from_cart, mince_amount } from './r-toolkit/Cart_slices';


function Cart_hover() {
    const dispatch = useDispatch()
    const cartt = useSelector((state)=>state.cart)
    const totall = cartt.reduce((acc,product)=>{
        acc += product.price * product.quaninty
        return acc
    },0)
  return (
    <div className='cart_hover'>
        <h5>...Cart products...</h5>
    {cartt !=  "" ? cartt.map((product)=>{
        return(
            <div className='cart_pro_hover'>
                <img src={product.thumbnail} alt="" />
                <div>
                    <p><strong>name :</strong>{product.title}</p>
                    <p><strong>category :</strong>{product.category}</p>
                    <p> <strong>price : </strong><strong>{product.quaninty}</strong> X {product.price}$</p>
                    <button onClick={()=>dispatch(delete_from_cart(product))} className='btn btn-danger'>delete</button>
                </div>
            </div>

        )
    }) : <h6>Your Cart is Impty !</h6> }


        <div className='cart_totall_hover'>
            <p>totall :</p>
            <p>${totall}.00</p>
        </div>
    </div>
  )
}

export default Cart_hover