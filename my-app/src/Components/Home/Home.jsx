export default function Home() {
    return <section className=" w-full">
        <img src="./images/home_page//Mask Group.jpeg" alt="home"/>
        <div className="w-5/12 h-2/5 z-10 bg-orange-100 absolute right-14 top-72">
            <div className="flex pl-12 pb-10 pt-14 pr-28 flex-col gap-1">
                <p className="font-semibold text-base">New Arrival</p>
                <h3 className="font-bold text-5xl text-yellow-600">Discover Our New Collection</h3>
                <p className="font-medium text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="font-bold w-52 h-16 bg-yellow-600 mt-10 text-white">BUY NOW</button>
            </div>
        </div>
    </section>
}