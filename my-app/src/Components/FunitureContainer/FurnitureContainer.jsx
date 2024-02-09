import { useEffect, useState } from "react"
import { arrCards } from "../../Service/funiteureSlides"

export default function FurnitureContainer(){
    const [arr, setArr] = useState(arrCards)



    return <div className="grid grid-flow-row">
        {arr.map((item, index) => {
            return <div className="" key={index}>
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
                <img src={item} alt="" className="" />
            </div>
        })}
    </div>

}