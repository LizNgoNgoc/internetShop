export default function Range() {
    return <section className="w-full mt-14 px-32">
        <div className="w-auto text-center mb-16">
            <h3 className="font-bold text-3xl text-zinc-900">Browse The Range</h3>
            <p className="text-zinc-500 text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex gap-5">
            <div className="flex flex-col gap-8">
                <img src="./images/range/Dining.png" alt="" />
                <h4 className="text-center text-zinc-900 font-semibold text-2xl">Dining</h4>
            </div>
            <div className="flex flex-col gap-8">
                <img src="./images/range/living.png" alt="" />
                <h4 className="text-center text-zinc-900 font-semibold text-2xl">Living</h4>
            </div>
            <div className="flex flex-col gap-8">
                <img src="./images/range/bedroom.png" alt="" />
                <h4 className="text-center text-zinc-900 font-semibold text-2xl">Bedroom</h4>
            </div>
        </div>

    </section>
}