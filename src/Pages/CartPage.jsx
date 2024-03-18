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
            <div className="w-full px-[100px] pt-[72px] pb-[63px] flex">
                <div className="w-[600px]">
                    <div className="flex bg-[#F9F1E7] h-[65px] gap-48 px-[144px] py-[15px]">
                        <p className="font-medium text-base">Product</p>
                        <p className="font-medium text-base">Price</p>
                        <p className="font-medium text-base">Quantity</p>
                        <p className="font-medium text-base">Subtotal</p>
                    </div>
                    <div className="flex">
                        <img src="" alt="" />
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <img src="" alt="" />                    
                    </div>
                </div>
                <div className="bg-[#F9F1E7] w-[393px] h-[390px]"></div>
            </div>
            <Garantees/>
    </section>
}