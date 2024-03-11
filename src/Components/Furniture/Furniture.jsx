import FurnitureContainer from "../FunitureContainer/FurnitureContainer";

export default function Furniture() {
    return <section className="m-auto mt-14 px-32 font-Poppins">
        <div className="w-auto text-center mb-16">
            <p className="text-[#666666] text-xl font-normal">Share your setup with</p>
            <h3 className="font-bold text-3xl text-[#333333]">#FuniroFurniture</h3>
        </div>
        <FurnitureContainer />
    </section>
}