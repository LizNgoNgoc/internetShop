import Garantees from "../Components/Garantees/Garantees"
import { useDispatch, useSelector } from "react-redux"
import { deleteToCart } from "../Redux/Slices/CustomFunctions"


export default function CartPage() {
    const basketCards = useSelector(state => state.funcSlice.basketCards)
    console.log(basketCards)

    const dispatch = useDispatch()

    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
            <img className="w-full" src="./images/shopHeader/banner.png" alt="cart"/>
            <div className="absolute top-[10rem] right-0 left-0 w-[105px] m-auto">
                <img src="./images/modal/logo.png" alt="logo" className="m-auto "/>
                <h3 className="text-[#000000] text-5xl">Cart</h3>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#000000] font-medium text-base">Home </span>
                        <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                        <span className="text-[#000000] font-light text-base"> Cart</span>
                    </div>
            </div>
            <div className="w-full pt-[72px] pb-[63px] flex justify-between ">
                <div className="">
                    <div className="flex w-[817px] bg-[#F9F1E7] h-[65px] items-center justify-between  py-[15px]">
                        <div className="w-[108px]"></div>
                        <p className="w-[152px] font-medium text-base">Product</p>
                        <p className="w-[175px] font-medium text-base">Price</p>
                        <p className="w-[74px] font-medium text-base">Quantity</p>
                        <p className="w-[190px] font-medium text-base">Subtotal</p>
                        <div className="w-[28px]"></div>
                    </div>
                    {basketCards.map((item, index) => {
                        return<div className="flex w-[817px] items-center justify-between  py-[15px]"> 
                                <img src={item.img} className='w-[108px]' alt="" />
                                <p className="w-[152px] text-[#9F9F9F] text-base font-normal">{item.name}</p>
                                <p className="w-[175px] text-[#9F9F9F] text-base font-normal">{item.price}</p>
                                <p className="w-[32px] text-black text-base font-normal border-solid border-black rounded-[4px] block p-[2px] border-[1px] px-[10npx] py-[4px]">{item.count}</p>
                                <p className="w-[190px] text-black text-base font-normal">{item.price}</p>
                                <img src="/images/modal/basket.png" className="w-[28px]" alt="" onClick={() => dispatch(deleteToCart(item.id))}/>                    
                    </div>
                    })}
                </div>
                <div className="bg-[#F9F1E7] w-[393px] flex flex-col items-center py-[25px]">
                    <h3 className="font-semibold text-[32px] mb-[61px]">Cart Totals</h3>
                    <div className="w-[250px] flex items-start gap-16 mb-[42px]">
                        <p className="text-base font-medium">Total</p>
                        <p className="text-[#B88E2F] font-medium text-[20px]">Rs. {basketCards.reduce((acc, item) => acc + item.price * item.count, 0)}</p>
                    </div>
                    <button className="px-[58px] py-[14px] font-medium text-[20px] rounded-[15px] border-[1px] border-solid border-black">Check Out</button>
                </div>
            </div>
            <Garantees/>
    </section>
}