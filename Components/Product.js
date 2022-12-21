import React, { useEffect, useContext } from 'react'
import { MystoreContext } from '../Store/Mystore'
import {Link} from "react-router-dom"
import Loader from './Loader'
const Product = () => {
  const {loader,products}= useContext(MystoreContext)
  console.log(loader)
  console.log(products)
  return loader ? <Loader /> : <table>
    <thead>
      <tr>
      
        <th>Tiltle</th>
        <th>Price</th>
        <th>Description</th>
        <th>Image</th>
        <th>Details</th>
        </tr>

    </thead>
    <tbody>
      {products.map((product)=>{
        return (
          <tr key={product.id}>
           
            <td className='border border-1  p-2'>{product.title.slice(0,30)}</td>
            <td className='border border- p-2'>{product.price}</td>
            <td className='border border-1 p-2'>{product.description.slice(0, 50)}</td>
            <td className='border border-1 p-2'><img className='w-20 h-20 object-cover'  src={product.image} alt="" /></td>
          <td><Link to={`/product/${product.id}`}>Details</Link></td>
          </tr>
        )
      })}
    </tbody>
  </table>
   
}

export default Product