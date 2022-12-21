import { useContext } from "react"
import {Link} from "react-router-dom"
import {AiOutlineShoppingCart}  from 'react-icons/ai'

import {MystoreContext} from "../Store/Mystore"
const Nav = () => {
    const {cart} = useContext(MystoreContext)
  return (
    <div className='border-b'>
        <div className='max-w-screen-xl mx-auto h-20 flex justify-between items-center'>
<Link to= "/">Home</Link>
<Link className='relative' to= "/CartItems">
<AiOutlineShoppingCart size={30}/>
<span className='flex justify-center items-center w-[25px] h-[25px] rounded-full bg-black text-white text-sm absolute -top-3 -right-2'>{cart.length}</span>
    </Link>
        </div>
    </div>
  )
}

export default Nav