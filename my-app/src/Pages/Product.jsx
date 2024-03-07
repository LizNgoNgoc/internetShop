import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { arrProducts } from "../Service/products"
import { useDispatch } from "react-redux"
import { addToCart, deleteToItemCart } from "../Redux/Slices/CustomFunctions"
import { Link } from "react-router-dom"



export default function Product () {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [productCard, setProductCard] = useState(arrProducts[0])

    useEffect(() => {
        setProductCard(arrProducts.find(item => item.id === id))
    }, [productCard, id])
    

    return <section className="font-Poppins my-10 mx-[auto] w-[80%]">
        <div className="flex">
            <div className="mr-20">
                <img src={productCard.img} className='w-[423px] h-[500px]' alt="img"/>  
            </div>
            <div className="flex flex-col gap-4 font-Poppins pt-[35px] pr-[100px] pb-[55px] pl-[82px]">
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
            <div className="flex gap-2.5">
                <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]">
                    <span className="mr-8" onClick={() => dispatch(deleteToItemCart(productCard))}>-</span>
                    <span>{productCard.count}</span>
                    <span className="ml-8" onClick={() => dispatch(addToCart(productCard))}>+</span>
                </button>
                <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]" onClick={() => dispatch(addToCart(productCard))}>Add to cart</button>
                <button className="h-16 border-[1px] border-black rounded-2xl text-[20px] text-black py-[6px] px-[30px]">+ Compare</button>
            </div> 
            <div className="w-[605px] bg-[#D9D9D9] divide-solid border-[1px]"></div> 
            <div className="flex flex-col gap-3">
                <p className="text-[#9F9F9F] font-normal text-sm">SKU: {productCard.sku}</p>
                <p className="text-[#9F9F9F] font-normal text-sm">Category: {productCard.category}</p>
                <p className="text-[#9F9F9F] font-normal text-sm">Tags: {productCard.tags}</p>
                <p className="text-[#9F9F9F] font-normal text-sm">Share: </p>
            </div>
            </div>
        </div>
        <div className="w-full bg-[#D9D9D9] divide-solid border-[1px]"></div> 
            <div className="flex gap-14 mt-[48px] mb-[37px] items-center justify-center">
                <Link className="text-black font-medium text-2xl">Description</Link>
                <Link className="text-[#9F9F9F] font-normal text-2xl">Additional Information</Link>
                <Link className="text-[#9F9F9F] font-normal text-2xl">Reviews [5]</Link>
            </div>
            <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-8">
                <p className="text-[#9F9F9F] text-base">{productCard.description}</p>
                <p className="text-[#9F9F9F] text-base">{productCard.description}</p>
            </div>
            <div className="flex gap-4 mb-[66px]">
                <img src={productCard.img} className="w-[605px] h-[348px] rounded-lg" alt="img" />
                <img src={productCard.img} className="w-[605px] h-[348px] rounded-lg" alt="img" />
            </div>
        </div>
        <div className="w-full bg-[#D9D9D9] divide-solid border-[1px]"></div>
    </section>
}