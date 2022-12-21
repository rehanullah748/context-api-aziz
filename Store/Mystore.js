import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MystoreContext = createContext()

const MystoreProvider = (props) => {
const [user, setUser] = useState('rehan')
const [count, setCount] = useState(0)
const [products, setProducts] = useState([])
const [loader, setLoader] = useState(true)
const [product, setProduct] = useState({})
const [cart, setCart] = useState([])


const addToCart = (item) => {
const Filter = cart.find((myitem)=>myitem.id ===item.id)
console.log(Filter)
if (Filter) {
    alert('Product is already in the cart')
}
else {
    setCart([...cart, item])
}
}
console.log(cart)

const Inc = () => {
    setCount(count + 1)
}
useEffect(() => {
    
    axios.get('https://fakestoreapi.com/products').then(({data})=> {
        setLoader(false)
      setProducts(data);
    }
      ).catch((err)=>{
        setLoader(false)
        console.log(err)

      })
    

  }, [])
  const getProduct = (id) => {
    setLoader(true)
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=> {
        setLoader(false)
      setProduct(data);
    }
      ).catch((err)=>{
        setLoader(false)
        console.log(err)

      })
  }
  
return (
    <MystoreContext.Provider value={{user,count,setCount, Inc, products, setProducts,loader, product, getProduct, cart,  addToCart}}>
    {props.children}
    
    </MystoreContext.Provider>
)
}
export default MystoreProvider;