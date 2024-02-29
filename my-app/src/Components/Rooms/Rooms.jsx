import { arrRooms } from "./SettingsRooms"


export default function Rooms() {
    return <section className="w-full bg-orange-100 mt-14 p-24 flex">
        <div className="h-96 w-1/3 mt-24">
            <h3 className="font-bold text-5xl text-[#333333]">50+ Beautiful rooms inspiration</h3>
            <p className="font-medium text-lg">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="font-bold w-52 h-16 bg-yellow-600 mt-10 text-white">Explore More</button>
        </div>
        <div className="flex gap-4">
            {arrRooms.map((item,index) => {
                return <img src={item.img} alt="pic" key={index} className={item.className} />
            })}
        </div>
    </section>
}