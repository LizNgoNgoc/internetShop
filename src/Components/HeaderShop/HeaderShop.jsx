import ProductsItems from "../ProductsItems/ProductsItems"
import Garantees from "../Garantees/Garantees"
import { styleImg } from "./StyleShop"

export default function HeaderShop() {
    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
        <img className="w-full" src="./images/shopHeader/banner.png" alt="shop"/>
        <div className="absolute top-[13rem] right-0 left-0 w-[135px] m-auto">
            <h3 className="text-[#000000] text-5xl">Shop</h3>
                <div className="flex gap-2 items-center">
                    <span className="text-[#000000] font-medium text-base">Home </span>
                    <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                    <span className="text-[#000000] font-light text-base"> Shop</span>
                </div>
        </div>
        <div className="bg-[#F9F1E7] h-28 flex gap-28 px-44 items-center alighn-center">
            <img src="./images/shopHeader/filter.png" className={styleImg} alt="img" />
            <p className="font-normal text-xl">Filter</p>
            <img src="./images/shopHeader/cards_hum.png" className={styleImg} alt="img" />
            <img src="./images/shopHeader/hum.png" className={styleImg} alt="img" />
            <p className="font-normal text-xl">Showing 1–16 of 32 results</p>
        </div>
        <ProductsItems/>
        <Garantees/>
    </section>
}