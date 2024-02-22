export default function ModalBasket() {

    return<section className="w-[417px] h-[746px] absolute top-7 right-2.5 p-[20px] bg-white font-Poppins">
        <div className="flex gap-8">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <img src="./images/modal/closeBasket.png" className="w-7" alt="" />
        </div>
        <div className="w-full border-[1px] border-[#D9D9D9] divide-solid"></div>
        <div className="w-full flex flex-col gap-3 py-5 overflow-y-scroll h-[550px] mt-5">
            <div className="w-full flex items-center gap-8">
                <img src="./images/range/Leviosa.png" className="w-[108px] h-[105px]" alt="img" />
                <div className="">
                    <h3>Asgaard sofa</h3>
                    <div className="flex justify-center items-center gap-[15px]">
                        <p>1 x </p><p className="text-[#B88E2F] text-[12px] leading-0 text font-medium">Rs. 250,000.00</p>
                    </div>
                </div>
                <img src="./images/modal/close.png"  className='w-[28px] h-[28px]' alt="img" />
            </div>
        </div>
        <div className="flex gap-24">
            <h2 className="font-normal text-base text-black">Subtotal</h2>
            <p className="font-semibold text-base">Rs. 520,000.00</p>
        </div>
        <div className="w-full border-[#D9D9D9] border-[1px] divide-solid"></div>
        <div className="flex gap-3.5 mt-[26px]">
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]">Cart</button>
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]">Checkout</button>
            <button className="border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]">Comparison</button>
        </div>

    </section>
}