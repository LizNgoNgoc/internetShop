import { arrProducts } from "../../Service/products"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsItems() {
    const [arrProd, setArrProd] = useState(arrProducts)

    return <srction className="font-Poppins">
            <div className="flex flex-col gap-8 mt-10">
                <div className="flex gap-8">
                {arrProd.map((item) => {
                    return <div className="flex flex-col gap-4" key={item.id}>
                    <img src={item.img} alt="img" />
                        <div>
                            <h4 className=" text-[#3A3A3A] font-semibold text-2xl">{item.name}</h4>
                            <p className="font-medium text-base text-[#898989]">{item.cardDescription}</p>
                            <div className="flex gap-4">
                                <span className=" text-[#3A3A3A] font-semibold text-2xl">Rp.{item.price}</span>
                                <strike className="font-medium text-base text-[#898989]">Rp.{item.oldPrice}</strike>
                            </div>
                        </div>
                    </div>
                })}
                </div>
                <div className="flex gap-8">
                    {arrProd.map((item) => {
                        return <div className="flex flex-col gap-4" key={item.id}>
                        <img src={item.img} alt="img" />
                            <div>
                                <h4 className=" text-[#3A3A3A] font-semibold text-2xl">{item.name}</h4>
                                <p className="font-medium text-base text-[#898989]">{item.cardDescription}</p>
                                <div className="flex gap-4">
                                    <span className=" text-[#3A3A3A] font-semibold text-2xl">Rp.{item.price}</span>
                                    <strike className="font-medium text-base text-[#898989]">Rp.{item.oldPrice}</strike>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="flex gap-8">
                    {arrProd.map((item) => {
                        return <div className="flex flex-col gap-4" key={item.id}>
                        <img src={item.img} alt="img" />
                            <div>
                                <h4 className=" text-[#3A3A3A] font-semibold text-2xl">{item.name}</h4>
                                <p className="font-medium text-base text-[#898989]">{item.cardDescription}</p>
                                <div className="flex gap-4">
                                    <span className=" text-[#3A3A3A] font-semibold text-2xl">Rp.{item.price}</span>
                                    <strike className="font-medium text-base text-[#898989]">Rp.{item.oldPrice}</strike>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="flex gap-8">
                    {arrProd.map((item) => {
                        return <div className="flex flex-col gap-4" key={item.id}>
                        <img src={item.img} alt="img" />
                            <div>
                                <h4 className=" text-[#3A3A3A] font-semibold text-2xl">{item.name}</h4>
                                <p className="font-medium text-base text-[#898989]">{item.cardDescription}</p>
                                <div className="flex gap-4">
                                    <span className=" text-[#3A3A3A] font-semibold text-2xl">Rp.{item.price}</span>
                                    <strike className="font-medium text-base text-[#898989]">Rp.{item.oldPrice}</strike>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="flex w-auto gap-9 mb-11">
                    <Link><img src="./images/shopHeader/click_square.png" className="relative" alt="img" /><p className="absolute">1</p></Link>
                    <Link><img src="./images/shopHeader/square.png" className="relative" alt="img" /><p className="absolute">2</p></Link>
                    <Link><img src="./images/shopHeader/square.png" className="relative" alt="img" /><p className="absolute">3</p></Link>
                    <Link><img src="./images/shopHeader/next_before.png" className="relative" alt="img" /><p className="absolute">Next</p></Link>
                </div>
            </div>
    </srction>
}