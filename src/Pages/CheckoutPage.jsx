import { styleInp } from "./PagesStyles"
import Garantees from "../Components/Garantees/Garantees"
import { mailValidation, nameValidation, phoneValidation, addressValidation,zipValidation } from "../Service/validation"
import { useState } from "react"
import './stylesCheck.css'

export default function Checkout() {

    function submitForm(e){
        e.preventDefault()
        const form = e.target
        const obj = {}
        const elements = Array.from(form.elements).filter(item => item.tagName !== 'BUTTON')
        elements.forEach(item => obj[item.name] = item.value)
        console.log(obj);
    }

    const[errMessage, setErrMessage] = useState({
        email : false,
        password : false
    })

    function handleErrMessage(e, Validation) {
        const valid = !Validation(e)
        setErrMessage({...errMessage, [e.target.name] : valid})
    }

    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
        <div>
            <img className="w-full" src="./images/shopHeader/banner.png" alt="cart"/>
            <div className="absolute top-[10rem] right-0 left-0 w-[235px] m-auto">
                <img src="./images/modal/logo.png" alt="logo" className="m-auto "/>
                <h3 className="text-[#000000] text-5xl">Checkout</h3>
                    <div className="flex gap-2 items-center justify-center">
                        <span className="text-[#000000] font-medium text-base">Home </span>
                        <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                        <span className="text-[#000000] font-light text-base"> Checkout</span>
                    </div>
            </div>
        </div>
        <form className="flex mt-[98px]" onSubmit={submitForm}>
         <div className="flex flex-col pt-[35px] pb-[71px] pl-[76px] pr-[79px] w-3/6">
            <h3 className="text-3xl font-semibold mb-[36px]">Billing details</h3>
                    <div action="" className="flex flex-col">
                        <div className="flex gap-[31px] mb-[36px]">
                            <div className="flex  w-full flex-col gap-[22px]">
                                <label htmlFor="" className="text-base font-medium">First Name</label>
                                <input type="text" required className={`${styleInp} w-full`} onInput={(e) => handleErrMessage(e, nameValidation)} name="firstName"/>
                                <p className={`${'error'} ${errMessage.firstName ? 'show' : ''}`}>Error: please, enter your First Name</p>
                            </div>
                            <div className="flex  w-full flex-col gap-[22px]">
                                <label htmlFor="" className="text-base font-medium">Last Name</label>
                                <input type="text" required className={`${styleInp} w-full`} onInput={(e) => handleErrMessage(e, nameValidation)} name="lastName"/>
                                <p className={`${'error'} ${errMessage.lastName ? 'show' : ''}`}>Error: please, enter your Last Name</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px]">
                            <label htmlFor="" className="text-base font-medium">Company Name (Optional)</label>
                            <input type="text" required className={styleInp} onInput={(e) => handleErrMessage(e, nameValidation)} name="company"/>
                            <p className={`${'error'} ${errMessage.company ? 'show' : ''}`}>Error: please, enter your company</p>
                            <label htmlFor="" className="text-base font-medium">Country / Region</label>
                            <input type="text" required className={styleInp} onInput={(e) => handleErrMessage(e, nameValidation)} name="country"/>
                            <p className={`${'error'} ${errMessage.country ? 'show' : ''}`}>Error: please, enter your country or region</p>
                            <label htmlFor="" className="text-base font-medium">Street address</label>
                            <input type="text" required className={styleInp} name="address" onInput={(e) => handleErrMessage(e, addressValidation)}/>
                            <p className={`${'error'} ${errMessage.address ? 'show' : ''}`}>Error: please, enter your address</p>
                            <label htmlFor="" className="text-base font-medium">Town / City</label>
                            <input type="text" required className={styleInp} onInput={(e) => handleErrMessage(e, nameValidation)}  name="town"/>
                            <p className={`${'error'} ${errMessage.town ? 'show' : ''}`}>Error: please, enter your city</p>
                            <label htmlFor="" className="text-base font-medium">Province</label>
                            <input type="text" className={styleInp} onInput={(e) => handleErrMessage(e, nameValidation)} name="province"/>
                            <label htmlFor="" className="text-base font-medium">ZIP code</label>
                            <input type="text" required className={styleInp} name="zip" onInput={(e) => handleErrMessage(e, zipValidation)}/>
                            <p className={`${'error'} ${errMessage.phone ? 'show' : ''}`}>Error: your ZIP code is incorrect</p>
                            <label htmlFor="" className="text-base font-medium" >Phone</label>
                            <input type="text" required className={styleInp} onInput={(e) => handleErrMessage(e, phoneValidation)} name="phone"/>
                            <p className={`${'error'} ${errMessage.phone ? 'show' : ''}`}>Error: your phone is incorrect</p>
                            <label htmlFor="" className="text-base font-medium">Email address</label>
                            <input type="text" required className={styleInp} onInput={(e) => handleErrMessage(e, mailValidation)} name="email"/>
                            <p className={`${'error'} ${errMessage.email ? 'show' : ''}`}>Error: your email is incorrect</p>
                            <input type="text" required placeholder="Additional information" onInput={(e) => handleErrMessage(e, nameValidation)} className={styleInp} name="info"/>
                        </div>
                    </div>
            </div>  
            <div className="w-3/6 pt-[100px] pb-[86px] h-1/2 sticky top-0 right-0 ml-1/2  pl-[38px] pr-[37px]">
                <div className="flex flex-col gap-[22px]">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Product</p>
                        <p className="font-medium text-2xl">Subtotal</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base font-normal text-[#9F9F9F]">Asgaard sofa <span className="text-black text-xs font-medium">x 1</span></p>
                        <p className="text-base font-light">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base font-normal">Subtotal</p>
                        <p className="text-base font-light">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base font-normal">Total</p>
                        <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                    <div className="border-[1px] h-[527] border-[#D9D9D9]"></div>
                </div>
                <div className="flex flex-col gap-[11px]">
                    <div className="mb-[14px] mt-[23px]">
                        <input type="radio" className="mr-[5px]"/>
                        <label htmlFor="" className="text-base font-medium">Direct Bank Transfer</label>
                            <p className="text-base font-light text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. 
                            Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                    <div>
                        <input type="radio" className="mr-[5px]"/>
                        <label htmlFor="" className="text-base font-medium text-[#9F9F9F]">Direct Bank Transfer</label>
                    </div>
                    <div>
                        <input type="radio" className="mr-[5px]"/>
                        <label htmlFor="" className="text-base font-medium text-[#9F9F9F]">Cash On Delivery</label>
                    </div>
                    <div className="mb-[39px]">
                        <p className="text-base font-light mt-[11px]">Your personal data will be used to support your experience throughout this website, 
                            to manage access to your account, and for other purposes described in our <span className="font-medium">privacy policy.</span></p>
                    </div>
                    <button className="m-auto text-xl font-normal border-[1px] border-black border-solid rounded-[15px] h-[64px] w-[318px]">Place order</button>
                </div>
            </div>
         </form>
         <Garantees/>
    </section>
}