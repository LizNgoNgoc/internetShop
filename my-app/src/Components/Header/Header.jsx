import { Link } from "react-router-dom"

export default function Header() {
    return <section className='w-full bg-white pl-14 pr-24 py-7'>
        <div>
            <Link className=""></Link>
        </div>
        <div>
            <nav>
                <Link>Home</Link>
                <Link>Shop</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </nav>
        </div>
        <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </section>
}