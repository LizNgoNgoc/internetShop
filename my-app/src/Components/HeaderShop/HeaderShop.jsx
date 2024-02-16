import { arrProducts } from "../../Service/products"
import { useState } from "react"

export default function HeaderShop() {
    const [arrProd, setArrProd] = useState(arrProducts)


    return <section className="w-full mb-14 p-24 font-Poppins">
        <img className="w-full" src="./images/shopHeader/banner.png" alt="shop"/>
        <div className="absolute top-72 right-1/4">
            <h3 className="text-[#000000] text-5xl">Shop</h3>
                <div className="flex gap-2 items-center">
                    <span className="text-[#000000] font-medium text-base">Home </span>
                    <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                    <span className="text-[#000000] font-light text-base"> Shop</span>
                </div>
        </div>
        <div className="bg-[#F9F1E7] h-28 flex gap-28 px-44 items-center alighn-center">
            <img src="./images/shopHeader/filter.png" className="w-[25px] h-[25px]" alt="img" />
            <p className="font-normal text-xl">Filter</p>
            <img src="./images/shopHeader/cards_hum.png" className="w-[25px] h-[25px]" alt="img" />
            <img src="./images/shopHeader/hum.png" className="w-[25px] h-[25px]" alt="img" />
            <p className="font-normal text-xl">Showing 1–16 of 32 results</p>
        </div>
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