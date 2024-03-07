import { useDispatch, useSelector } from 'react-redux'
import { showModal, deleteToCart, addToItemCart, deleteToItemCart } from '../../Redux/Slices/CustomFunctions'
import { styleBasketBtn, styleModalSection } from './Basket'



export default function ModalBasket() {
    const {modalActive, basketCards} = useSelector(state => state.funcSlice)

    const dispatch = useDispatch()

    console.log(basketCards);
    return<section className={`${styleModalSection} ${!modalActive && 'hidden'}`}>
        <div className="flex gap-40 mb-6">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <img src="./images/modal/closeBasket.png" className="w-7 cursor-pointer" alt="" onClick={() => dispatch(showModal())} />
        </div>
        <div className="w-full border-[1px] border-[#D9D9D9] divide-solid"></div>
        <div className="w-full flex flex-col gap-3 py-5 overflow-y-scroll h-[465px] mt-5">
            {basketCards.map((item, index) => {
                return <div key={index} className="w-full flex gap-8 relative">
                    <img src={item.img} className="w-[108px] h-[105px]" alt="img" />
                    <div className="relative">
                        <h3>{item.name}</h3>
                        <div className="flex justify-center items-center gap-[15px]">
                            <p>{item.count + `x`}</p><p className="text-[12px] leading-0 text font-medium text-[#B88E2F]">{item.count * item.price}</p>
                        </div>
                        <div className='absolute left-0 bottom-[15px] flex gap-4'>
                            <p className='bg-addToCard-bg bg-cover w-[15px] h-[15px]' onClick={() => dispatch(addToItemCart(item))}></p>
                            <p className='bg-deleteToCard-bg bg-cover w-[15px] h-[15px]' onClick={() => dispatch(deleteToItemCart(item))}></p>
                        </div>
                    </div>
                    <div onClick={() => dispatch(deleteToCart(item.id))}  className='w-[28px] h-[28px] absolute right-4 top-8'><img src="/images/modal/close.png" className='w-full' alt="img" /></div>
             </div>
            })}
           
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