export default function Checkout() {
    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
        <div>
            <img className="w-full" src="./images/shopHeader/banner.png" alt="cart"/>
            <div className="absolute top-[10rem] right-0 left-0 w-[235px] m-auto">
                <img src="./images/modal/logo.png" alt="logo" className="m-auto "/>
                <h3 className="text-[#000000] text-5xl">Checkout</h3>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#000000] font-medium text-base">Home </span>
                        <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                        <span className="text-[#000000] font-light text-base"> Checkout</span>
                    </div>
            </div>
        </div>
         <div className="flex flex-col">
            <h3>Billing details</h3>
            <form action="" className="flex flex-col">
                <div className="flex gap-[31px] mb-[36px]">
                    <div className="flex flex-col">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    </div>
                </div>
                <div className="flex flex-col gap-[22px]">
                    <label htmlFor="">Company Name (Optional)</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Country / Region</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Street address</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Town / City</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Province</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">ZIP code</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Phone</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <label htmlFor="">Email address</label>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                    <input type="text" className="border-[1px] border-solid rounded-[10px] border-[#9F9F9F] h-[75px]"/>
                </div>
            </form>
            <div></div>
         </div>
    </section>
}