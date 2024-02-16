import { arrProducts } from "../../Service/products"
import { useState } from "react"

export default function HeaderShop() {
    const [arrProd, setArrProd] = useState(arrProducts)


    return <section className="w-full mb-14 p-24 font-Poppins">
        <img className="w-full" src="./images/shopHeader/banner.png" alt="shop"/>
        <div className="absolute top-56 right-2/4">
            <h3 className="m-auto text-[#3A3A3A] text-5xl">Shop</h3>
        </div>
        <div className="bg-[#F9F1E7] h-28"></div>
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
    </section>
}