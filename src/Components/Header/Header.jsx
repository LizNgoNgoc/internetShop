import { Link } from "react-router-dom"
import ModalBasket from "../../Custom/ModalBasket/ModalBasket"
import { useDispatch } from "react-redux"
import { showModal } from "../../Redux/Slices/CustomFunctions"
import { navs } from "./Settings"


export default function Header() {
    const dispatch = useDispatch()

    return <header className='w-full bg-white justify-between pl-14 pr-24 py-7 z-[999] flex font-Poppins fixed'>
        <div className="w-48">
            <Link className="flex gap-1">
                <img src="/images/home_page/Meubel House_Logos-05.svg" alt='img'/>
                <img src="/images/home_page/SkinClinic.svg" alt='img'/>
            </Link>
        </div>
        <div>
            <nav className="flex w-auto gap-16 font-medium">
                {navs.map(({title, path}, index) => <Link key={index} to={path}>{title}</Link>)}
            </nav>
        </div>
        <div className="flex w-auto gap-9">
            <Link><img src="/images/home_page/account.svg" alt='img'/></Link>
            <Link><img src="/images/home_page/search.svg" alt='img'/></Link>
            <Link><img src="/images/home_page/like.svg" alt='img'/></Link>
            <Link onClick={() => dispatch(showModal())}><img src="/images/home_page/basket.svg" alt='img'/></Link>
        </div>
        <ModalBasket/>
    </header>
}