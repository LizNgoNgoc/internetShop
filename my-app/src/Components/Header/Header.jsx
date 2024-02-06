import { Link } from "react-router-dom"

export default function Header() {
    return <section className='w-full bg-white pl-14 pr-24 py-7 flex font-Poppins'>
        <div className="w-48 mr-64">
            <Link className="flex gap-1">
                <img src="./images/home_page/Meubel House_Logos-05.svg" alt='img'/>
                <img src="./images/home_page/SkinClinic.svg" alt='img'/>
            </Link>
        </div>
        <div>
            <nav className="flex w-auto gap-16 mx-40 font-medium">
                <Link>Home</Link>
                <Link>Shop</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </nav>
        </div>
        <div className="flex w-auto gap-9">
            <Link><img src="./images/home_page/account.svg" alt='img'/></Link>
            <Link><img src="./images/home_page/search.svg" alt='img'/></Link>
            <Link><img src="./images/home_page/like.svg" alt='img'/></Link>
            <Link><img src="./images/home_page/basket.svg" alt='img'/></Link>
        </div>
    </section>
}