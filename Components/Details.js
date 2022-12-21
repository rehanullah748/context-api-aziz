import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MystoreContext } from "../Store/Mystore"
import Loader from "./Loader"
const Details = () => {
    
    const [Quantity, setQuantity] = useState(1)
    const Increase = ()=> {
        setQuantity(Quantity + 1)
    }
    const Decrease = () => {
        setQuantity(Quantity - 1)
    }

    const { getProduct, product, loader,  addToCart } = useContext(MystoreContext)
    const { id } = useParams()
    useEffect(() => {
        getProduct(id);

    }, [])
    const addItem = () => {
        addToCart({...product, quantities:Quantity})
    }

    return loader ? (<Loader />) : (
        
        <div className="flex justify-center ">
            <div className="mt-10">
                <img className="h-[220px] w-[190px] object-cover" src={product?.image} alt="" />
            </div>

            <div className="pl-[40px] mt-10">

                <div>
                    <h1>Title: {product?.title}</h1>
                </div>
                <div>
                    <h3>Price:{product?.price}$</h3>
                </div>
                <div>
                    <h1>Description:</h1>
                    <p>{product?.description.slice(0, 80)}...</p>
                </div>
                <div className="pt-5">
                    <h1>Quantity</h1>
            <span className=" bg-blue-700 px-5 py-1 rounded-sm "><button onClick={Increase}>Inc</button></span>
            <span className="p-3"><input className=" border-2 border" type="text" value={Quantity} /></span>
            <span className=" bg-blue-700
            
            px-5 py-1 rounded-sm "><button onClick={Decrease}>Dec</button></span>
            </div>
            <div className="mt-7">
            <button onClick={addItem} className="bg-slate-300 px-5 py-1">Add To Cart</button>
            </div>
            
            </div>
           
        </div>
        
    )



}

export default Details