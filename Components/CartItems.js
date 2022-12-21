import React from 'react'
import { useContext } from 'react'
import {MystoreContext} from "../Store/Mystore"
const CartItems = () => {
    const {cart, Quantity, loader} =useContext(MystoreContext)
  return cart ? (<table>
    <thead>
        <tr>
            <th>image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
    </thead>
    <tbody>
        {cart.map((item)=>{
            return (
            <tr>
                <td className=' border border-1  p-2'>{item.image}</td>
                <td className=' border border-1  p-2'>{item.title}</td>
                <td className=' border border-1  p-2'>{item.price}</td>
                <td className=' border border-1  p-2'>{item.Quantity}</td>
            </tr>
       ) })}
    </tbody>
    
  </table>
  ): (<loader/>)
   
  
}

export default CartItems