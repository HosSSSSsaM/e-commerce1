import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_amount, claer_all_cart, delete_from_cart, mince_amount } from './r-toolkit/Cart_slices';
import { LiaShoppingBagSolid } from "react-icons/lia";

function Cart() {

  const dispatch = useDispatch()
  const cartt = useSelector((state)=>state.cart)
  console.log(cartt);


  const totall = cartt.reduce((acc,product)=>{
    acc += product.price * product.quaninty
    return acc
  },0)

  let id = 0

  
  return (
   <>
      <div className='title'>
        <h2> Your Cart <LiaShoppingBagSolid /> </h2>
        <hr />
      </div>
   <table className="table table-dark table-hover container">
      <thead>
        <tr>
          <th>#</th>
          <th> Image </th>
          <th> Title </th>
          <th> Categoy </th>
          <th> Price </th>
          <th> Quantity </th>
          <th> DELETE</th>
        </tr>
      </thead>
      <tbody>
        {cartt && cartt.map((product)=>{
          return(
        <tr key={product.id}>
            <td>{++id}</td>
            <td><img className='imggg' src={product.thumbnail} alt="" /></td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>${product.price * product.quaninty }</td>
            <td >
              <div className='amount_btns'>
                  <button onClick={()=>dispatch(add_amount(product))}>+</button>
                  <span>{product.quaninty}</span>
                  <button onClick={()=>dispatch(mince_amount(product))}>-</button>
              </div>
            </td>
            <td> <button className='btn btn-danger' onClick={()=>dispatch(delete_from_cart(product))}>Delete</button></td>
        </tr>
          )
        })}
      </tbody>
  </table>

        <h3 className=' totall text-center'>Total cart : ${totall}.00</h3>

  <button className=' delete_all btn btn-danger container mt-3 d-flex aling-items-center justify-content-center'
   onClick={()=>dispatch(claer_all_cart())}> Delete All Prouduct Cart</button>
   </> 
  )
}

export default Cart