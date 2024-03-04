import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { arrProducts } from "../Service/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/Slices/CustomFunctions"


export default function Product () {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [productCard, setProductCard] = useState(arrProducts[0])

    useEffect(() => {
        setProductCard(arrProducts.find(item => item.id === id))
    }, [productCard])
    


    return <section className="font-Poppins my-10 mx-[auto] w-[80%] flex">
        <div className="mr-20">
            <img src={productCard.img} alt="img"/>  
        </div>
        <div>
            <h1>{productCard.cardDescription}</h1>
            <div className="flex gap-4">
                <p>Rp.{productCard.price}</p>
                <strike>Rp.{productCard.oldPrice}</strike>
            </div>
            <p>{productCard.description}</p>
            <p>Size</p>
            <p>Color</p>
            <div className="w-[605px] bg-[#D9D9D9]"></div>
        <div>
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]">1</button>
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]" onClick={() => dispatch(addToCart(productCard))}>Add to cart</button>
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]">+ Compare</button>
        </div>  
        </div>
    </section>
}