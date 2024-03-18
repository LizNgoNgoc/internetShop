import Garantees from "../Components/Garantees/Garantees"

export default function CartPage() {
    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
            <img className="w-full" src="./images/shopHeader/banner.png" alt="cart"/>
            <div className="absolute top-52 right-[45%]">
                <h3 className="text-[#000000] text-5xl">Cart</h3>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#000000] font-medium text-base">Home </span>
                        <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                        <span className="text-[#000000] font-light text-base"> Shop</span>
                    </div>
            </div>
            <div></div>
            <Garantees/>
    </section>
}