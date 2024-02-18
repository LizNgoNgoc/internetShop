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
                            <div className="bg-[#F4F5F7]">
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
                <div className="flex w-auto gap-9 mb-11 justify-center">
                    <Link><div className="bg-[#B88E2F] font-normal text-white text-xl w-[60px] h-[60px] rounded-xl p-5">1</div></Link>
                    <Link><div className="bg-[#F9F1E7] font-normal text-black text-xl w-[60px] h-[60px] rounded-xl p-5">2</div></Link>
                    <Link><div className="bg-[#F9F1E7] font-normal text-black text-xl w-[60px] h-[60px] rounded-xl p-5">3</div></Link>
                    <Link><div className="bg-[#F9F1E7] font-light text-black text-xl w-[98px] h-[60px] rounded-xl p-5">Next</div></Link>
                </div>
            </div>
    </srction>
}