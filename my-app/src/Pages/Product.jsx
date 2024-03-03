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
    


    return <section className={"font-Poppins my-10 mx-[auto] w-[80%]"}>
        <h1>{productCard.name}</h1>
        <img src={productCard.img} alt="img"/>
        <p>{productCard.cardDescription}</p>
        <p>{productCard.price}</p>
        <p>{productCard.oldPrice}</p>
        <p>{productCard.description}</p>
        <button className="bg-[#B88E2F] w-[202px] h-[48px]" onClick={() => dispatch(addToCart(productCard))}>Add to cart</button>
    </section>
}