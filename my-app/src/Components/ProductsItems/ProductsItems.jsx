import { arrProducts } from "../../Service/products"
import { useState } from "react"

export default function ProductsItems() {
    const [arrProd, setArrProd] = useState(arrProducts)

    return <srction>
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
            </div>
    </srction>
}