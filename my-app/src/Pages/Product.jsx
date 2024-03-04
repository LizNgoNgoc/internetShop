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
            <img src={productCard.img} className='w-[423px] h-[500px]' alt="img"/>  
        </div>
        <div className="flex flex-col gap-4 font-Poppins">
            <h1 className="font-normal text-[42px]">{productCard.cardDescription}</h1>
            <div className="flex gap-4">
                <p className="text-[#9F9F9F] font-medium text-2xl">Rp.{productCard.price}</p>
                <strike className='text-[#9F9F9F] font-medium text-lg'>Rp.{productCard.oldPrice}</strike>
            </div>
            <p className="font-normal text-black text-sm">{productCard.description}</p>
            <div>
                <p className="text-[#9F9F9F] font-normal text-sm">Size</p>
            </div>
            <div>
                <p className="text-[#9F9F9F] font-normal text-sm">Color</p>
            </div>
            <div className="w-[605px] bg-[#D9D9D9] divide-solid border-[1px]"></div>
        <div className="flex gap-2.5">
            <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]">
                <span className="mr-8">-</span>
                <span>1</span>
                <span className="ml-8">+</span>
            </button>
            <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]" onClick={() => dispatch(addToCart(productCard))}>Add to cart</button>
            <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]">+ Compare</button>
        </div>  
        <div>
            <p>SKU: {productCard.sku}</p>
            <p>Category: {productCard.category}</p>
            <p>Tags: {productCard.tags}</p>
            <p>Share: </p>
        </div>
        </div>
    </section>
}