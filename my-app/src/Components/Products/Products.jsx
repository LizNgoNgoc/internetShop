export default function Productds() {
    return <section className="w-full mt-14 p-24">
        <h3 className="font-bold text-3xl text-zinc-900 text-center mb-8">Our Products</h3>
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Syltherpng.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Syltherine</h4>
                        <p className="font-medium text-base text-zinc-500">Stylish cafe chair</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 2.500.000</span>
                            <strike className="font-medium text-base text-zinc-500">Rp 3.500.000</strike>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Leviosa.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Leviosa</h4>
                        <p className="font-medium text-base text-zinc-500">Stylish cafe chair</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 2.500.000</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Lolito.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Lolito</h4>
                        <p className="font-medium text-base text-zinc-500">Luxury big sofa</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 7.000.000</span>
                            <strike className="font-medium text-base text-zinc-500">Rp 14.000.000</strike>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Respiro.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Respira</h4>
                        <p className="font-medium text-base text-zinc-500">Outdoor bar table and stool</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 500.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Grifo.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Grifo</h4>
                        <p className="font-medium text-base text-zinc-500 ">Night lamp</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 1.500.000</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Muggo.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Muggo</h4>
                        <p className="font-medium text-base text-zinc-500 ">Small mug</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 150.000</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Pingkypng.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Pingky</h4>
                        <p className="font-medium text-base text-zinc-500 ">Cute bed set</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 7.000.000</span>
                            <strike className="font-medium text-base text-zinc-500 ">Rp 14.000.000</strike>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="./images/range/Potty.png" alt="img" />
                    <div>
                        <h4 className=" text-zinc-900 font-semibold text-2xl">Potty</h4>
                        <p className="font-medium text-base text-zinc-500 ">Minimalist flower pot</p>
                        <div className="flex gap-4">
                            <span className=" text-zinc-900 font-semibold text-2xl">Rp 500.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="text-yellow-600 border-yellow-600 font-bold w-60 h-12 border-2 block my-0 mx-auto">Show More</button>
        </div>
        
    </section>
}