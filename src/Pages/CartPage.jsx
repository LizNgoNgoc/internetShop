export default function CartPage() {
    return <section className="m-auto w-[1440px] mb-14 p-24 font-Poppins relative">
    <img className="w-full" src="./images/shopHeader/banner.png" alt="shop"/>
    <div className="absolute top-72 right-1/4">
        <h3 className="text-[#000000] text-5xl">Shop</h3>
            <div className="flex gap-2 items-center">
                <span className="text-[#000000] font-medium text-base">Home </span>
                <img src="./images/shopHeader/point_page.png" className="w-[8px] h-[14px]" alt="img" />
                <span className="text-[#000000] font-light text-base"> Shop</span>
            </div>
    </div>
    </section>
}