import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../Redux/Slices/CustomFunctions'



const styleBasketBtn = 'border-[1px] border-black rounded-3xl text-[12px] text-black py-[6px] px-[30px]'

export default function ModalBasket() {
    const view = useSelector(state => state.funcSlice.modalActive)
    const dispatch = useDispatch()

    return<section className={`w-[417px] h-[746px] absolute top-7 right-2.5 p-[20px] z-10 bg-white font-Poppins ${!view && 'hidden'}`}>
        <div className="flex gap-40 mb-6">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <img src="./images/modal/closeBasket.png" className="w-7 cursor-pointer" alt="" onClick={() => dispatch(showModal())} />
        </div>
        <div className="w-full border-[1px] border-[#D9D9D9] divide-solid"></div>
        <div className="w-full flex flex-col gap-3 py-5 overflow-y-scroll h-[465px] mt-5">
            <div className="w-full flex items-center gap-8">
                <img src="./images/range/Leviosa.png" className="w-[108px] h-[105px]" alt="img" />
                <div className="">
                    <h3>Asgaard sofa</h3>
                    <div className="flex justify-center items-center gap-[15px]">
                        <p>1 x </p><p className="text-[12px] leading-0 text font-medium text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                </div>
                <img src="./images/modal/close.png"  className='w-[28px] h-[28px]' alt="img" />
            </div>
        </div>
        <div className="flex gap-24 mb-5 pl-[27px] pr-[40px] py-[28px]">
            <h2 className="font-normal text-base text-black">Subtotal</h2>
            <p className="font-semibold text-base text-[#B88E2F]">Rs. 520,000.00</p>
        </div>
        <div className="w-full border-[#D9D9D9] border-[1px] divide-solid"></div>
        <div className="flex gap-3.5 mt-[26px]">
            <button className={styleBasketBtn}>Cart</button>
            <button className={styleBasketBtn}>Checkout</button>
            <button className={styleBasketBtn}>Comparison</button>
        </div>

    </section>
}