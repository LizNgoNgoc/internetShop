import { arrCards } from "../../Service/funiteureSlides"
import './styles.css'

export default function FurnitureContainer(){

    return <div className="grid_mosaic overflow-hidden">
        {arrCards.map((item, index) => {
            return <img src={item.img} alt="pic" key={index} className={item.className} />
        })}
    </div>

}