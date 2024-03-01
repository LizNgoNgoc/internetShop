import { arrGarantees } from "./SettingsGatantees"

export default function Garantees() {

    return <section className="w-full h-[270px] bg-[#FAF3EA] px-6 py-28 flex font-Poppins gap-8">
        {arrGarantees.map((item, index) => {
            return <div key={index} className="flex gap-2">
                <img src={item.img} alt="img" />
                <div className="flex flex-col">
                    <h3 className="text-[#242424] text-2xl font-semibold">{item.name}</h3>
                    <p className="text-[#898989] font-medium text-xl">{item.description}</p>
                </div>
            </div>
        })}
    </section>
}