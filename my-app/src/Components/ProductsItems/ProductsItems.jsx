import { arrProducts } from "../../Service/products"
import { Link } from "react-router-dom"
import './product.css'

export default function ProductsItems() {

    return <section className="font-Poppins">
            <div className="flex flex-col gap-8 mt-10">
                <div className="flex gap-8">
                    {arrProducts.map((item) => {
                        return <div className="flex flex-col relative gap-4 cardProduct" key={item.id}>
                            <img src={item.img} alt="img" />
                            <div>
                                <h4 className=" text-[#3A3A3A] font-semibold text-2xl">{item.name}</h4>
                                <p className="font-medium text-base text-[#898989]">{item.cardDescription}</p>
                                <div className="flex gap-4">
                                    <span className=" text-[#3A3A3A] font-semibold text-2xl">Rp.{item.price}</span>
                                    <strike className="font-medium text-base text-[#898989]">Rp.{item.oldPrice}</strike>
                                </div>
                            </div>
                            <div className="bg-overlayImg-bg opacity-0 absolute top-0 left-0 w-[285px] h-[100%] pt-[175px] hiddenCard">
                                <button className="mx-[41px] mb-[24px] bg-white w-[202px] h-[48px] text-[#B88E2F]">Show the product</button>
                                <div className="flex gap-4 justify-center">
                                    <Link><img src="./images/range/shareBtn.png" alt="img" /></Link>
                                    <Link><img src="./images/range/compareBtn.png" alt="img" /></Link>
                                    <Link><img src="./images/range/LikeBtn.png" alt="img" /></Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
               
                <div className="flex w-auto gap-9 mb-11 justify-center">
                    {[1,2,3,4].map((item, index, arr) => <Link 
                        className="bg-[#B88E2F] flex justify-center items-center font-normal text-white text-xl w-[60px] h-[60px] rounded-xl p-5">
                            { arr.length === index + 1 ? 'Next' : item }
                        </Link>)}
                   
                </div>
            </div>
    </section>
}