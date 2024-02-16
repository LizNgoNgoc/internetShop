export default function Garantees() {

    return <section className="w-full h-[270px] bg-[#FAF3EA] px-6 py-28 flex font-Poppins gap-8">
        <div className="flex gap-2">
            <img src="./images/shopGarantees/quality.png" alt="img" />
            <div className="flex flex-col">
                <h3 className="text-[#242424] text-2xl font-semibold">High Quality</h3>
                <p className="text-[#898989] font-medium text-xl">Crafted from top materials</p>
            </div>
        </div>
        <div className="flex gap-2">
            <img src="./images/shopGarantees/guarantee.png" alt="img" />
            <div className="flex flex-col">
                <h3 className="text-[#242424] text-2xl font-semibold">Warranty Protection</h3>
                <p className="text-[#898989] font-medium text-xl">Over 2 years</p>
            </div>
        </div>
        <div className="flex gap-2">
            <img src="./images/shopGarantees/shipping.png" alt="img" />
            <div className="flex flex-col">
                <h3 className="text-[#242424] text-2xl font-semibold">Free Shipping</h3>
                <p className="text-[#898989] font-medium text-xl">Order over 150 $</p>
            </div>
        </div>
        <div className="flex gap-2">
            <img src="./images/shopGarantees/customer-support.png" alt="img" />
            <div className="flex flex-col">
                <h3 className="text-[#242424] text-2xl font-semibold">24 / 7 Support</h3>
                <p className="text-[#898989] font-medium text-xl">Dedicated support</p>
            </div>
        </div>
    </section>
}