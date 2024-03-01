import { arrProducts, styleBtn } from "./SettingsProducts"

export default function Productds() {
    return <section className="w-full mt-14 p-24 font-Poppins">
        <h3 className="font-bold text-3xl text-[#333333] text-center mb-8">Our Products</h3>
            <div className="flex gap-8 flex-wrap">
                {arrProducts.map((item, index) => {
                    return <div className="flex flex-col gap-4 mb-8" key={index}>
                            <img src={item.img} alt="img" />
                            <div>
                                <h4 className=" text-[#333333] font-semibold text-2xl">{item.name}</h4>
                                <p className="font-medium text-base text-[#898989]">{item.description}</p>
                                <div className="flex gap-4">
                                    <span className=" text-[#333333] font-semibold text-2xl">{item.price}</span>
                                    <strike className="font-medium text-base text-[#898989]">{item.oldPrice}</strike>
                                </div>
                            </div>
                    </div>
                })}
            </div>
            <button className={styleBtn}>Show More</button>
    </section>
}