import { arrRange, stylesText } from "./SettingsRange"


export default function Range() {
    return <section className="w-full mt-14 px-32 font-Poppins">
        <div className="w-auto text-center mb-16">
            <h3 className="font-bold text-3xl text-[#333333]">Browse The Range</h3>
            <p className="text-[#666666] text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex gap-5">
                {arrRange.map((item, index) => {
                    return <div className="flex flex-col gap-8" key={index}>
                            <img src={item.img} alt="img" />
                            <h4 className={stylesText}>{item.name}</h4>
                        </div>
                })}
        </div>

    </section>
}