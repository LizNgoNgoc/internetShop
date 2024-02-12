import { useEffect, useState } from "react"
import { arrCards } from "../../Service/funiteureSlides"
import './styles.css'

export default function FurnitureContainer(){
    const [arr, setArr] = useState(arrCards)



    return <div className="grid_mosaic">
        {arr.map((item, index) => {
            return <img src={item.img} alt="pic" key={index} className={item.className} />
        })}
    </div>

}