import { useEffect, useState } from "react"
import { arrRooms } from "./SettingsRooms"


export default function Rooms() {

    const [slides, setSlides] = useState(arrRooms)
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     setInterval(() => {
    //         slides.push(arrRooms[count % arrRooms.length])
    //         setSlides([...slides])
    //         // setCount(count+1)
    //     }, 3000)
    // }, [])


    console.log(count)
    return <section className="m-auto w-[1440px] bg-orange-100 mt-14 p-24 flex">
        <div className="h-96 w-1/3 mt-24">
            <h3 className="font-bold text-5xl text-[#333333]">50+ Beautiful rooms inspiration</h3>
            <p className="font-medium text-lg">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="font-bold w-52 h-16 bg-yellow-600 mt-10 text-white">Explore More</button>
        </div>
        <div className="flex gap-4 overflow-hidden">
            <div className={`flex  translate-x-[${count * 404}px] transition-all`}></div>
            {slides.map((item,index) => {
                return <img src={item.img} alt="pic" key={index} className={item.className}/>
            })}
        </div>
    </section>
}