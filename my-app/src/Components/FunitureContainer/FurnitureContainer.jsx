import { useEffect, useState } from "react"
import { arrCards } from "../../Service/funiteureSlides"
import './styles.css'

export default function FurnitureContainer(){
    const [arr, setArr] = useState(arrCards)



    return <div className="grid grid-flow-row">
        {arr.map((item, index) => {
            return <div className="grid_mosaic" key={index}>
                <div className={item}>
                    <img src={item} alt="pic" className="" />
                </div>
            </div>
        })}
    </div>

}