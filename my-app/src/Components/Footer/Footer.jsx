import { Link } from "react-router-dom"

export default function Footer(){
    return <section className="w-full px-32 mb-14">
        <div className="flex gap-32">
            <div className="w-72">
                <h3 className="font-bold text-2xl text-zinc-900 mb-12">Funiro.</h3>
                <p className="text-zinc-400 text-base font-normal">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="flex flex-col gap-14">
                <p className="text-zinc-400 text-base font-medium">Links</p>
                <Link className="text-zinc-900 text-base font-medium">Home</Link>
                <Link className="text-zinc-900 text-base font-medium">Shop</Link>
                <Link className="text-zinc-900 text-base font-medium">About</Link>
                <Link className="text-zinc-900 text-base font-medium">Contact</Link>
            </div>
            <div className="flex flex-col gap-14">
                <p className="text-zinc-400 text-base font-medium">Help</p>
                <Link className="text-zinc-900 text-base font-medium">Payment Options</Link>
                <Link className="text-zinc-900 text-base font-medium">Returns</Link>
                <Link className="text-zinc-900 text-base font-medium">Privacy Policies</Link>
            </div>
            <div className="flex flex-col gap-14">
            <p className="text-zinc-400 text-base font-medium">Newsletter</p>
                <div>
                    <input type="email" placeholder="Enter Your Email Address" className="text-zinc-400 text-base font-normal border-b-2 border-zinc-900 mr-3"/>
                    <button className="text-zinc-900 text-base font-medium border-b-2 border-zinc-900">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr className="w-11/12 text-zinc-400 my-14"/>
        <p className="text-zinc-900 text-base font-normal">2023 furino. All rights reverved</p>
    </section>
}