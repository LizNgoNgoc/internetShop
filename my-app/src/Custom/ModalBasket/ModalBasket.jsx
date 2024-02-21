export default function ModalBasket() {

    return<section className="w-[417px] h-[746px] absolute top-7 right-2.5 bg-white">
        <div className="flex gap-8">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <img src="./images/modal/closeBasket.png" className="w-7" alt="" />
        </div>
        <div className="w-[287px] border-[1px] border-[#D9D9D9] divide-solid"></div>
        <div className="w-[350px] h-[105px]"></div>
        <div className="w-[350px] h-[105px]"></div>
        <div className="w-[350px] h-[105px]"></div>
        <div className="w-[350px] h-[105px]"></div>
        <div className="flex gap-24">
            <h2 className="font-normal text-base text-black">Subtotal</h2>
            <p className="font-semibold text-base">Rs. 520,000.00</p>
        </div>
        <div className="w-full border-[#D9D9D9] border-[1px] divide-solid"></div>
        <div className="flex gap-3.5 mt-[26px]">
            <button className="border-[1px] border-black rounded-3xl text-black py-[6px] px-[30px]">Cart</button>
            <button className="border-[1px] border-black rounded-3xl text-black py-[6px] px-[30px]">Checkout</button>
            <button className="border-[1px] border-black rounded-3xl text-black py-[6px] px-[30px]">Comparison</button>
        </div>

    </section>
}