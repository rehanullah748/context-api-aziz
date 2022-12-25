import React from 'react'
import { useContext } from 'react'
import {AiOutlinePlusCircle , AiOutlineMinusCircle} from 'react-icons/ai'
import {MystoreContext} from "../Store/Mystore"
const CartItems = () => {
    const {cart, Quantity, loader, Increase, Decrease, Delete} =useContext(MystoreContext)
  return cart ? ( <div className='flex justify-center items-center w-8/12'>
    <table>
    <thead>
        <tr>
            <th>image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {cart.map((item)=>{
            console.log(item, "item")
            return (
            <tr>
                <td className=' border border-1  pl-4 '><img className='h-20 w-20'  src={item.image} alt="" /></td>
                <td className=' border border-1  pl-4 '>{item.title.slice(0,20)}</td>
                <td className=' border border-1  pl-4 '>{item.price*item.Quantity}</td>
                <td className=' border border-1  pl-4  flex'>
                    <span className='pl-2' onClick={()=>Increase(item.id)}><AiOutlinePlusCircle /></span>
                    <span className='pl-2'><input type="text" value={item.Quantity} /></span>
                    <span className='pl-2' onClick={()=>Decrease(item.id)}><AiOutlineMinusCircle /></span>
                </td>
                <td className=' border border-1  p-4 m-2'><button onClick={()=>Delete(item.id)}>Delete</button></td>
            </tr>
       ) })}
    </tbody>
    
  </table>
  </div>
  ): (<loader/>)
   
  
}

export default CartItems
