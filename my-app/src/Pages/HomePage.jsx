import Home from "../Components/Home/Home";
import Range from "../Components/Range.jsx/Range";
import Productds from "../Components/Products/Products";
import Rooms from "../Components/Rooms/Rooms";
import Furniture from "../Components/Furniture/Furniture";

export default function HomePage() {
    return(
        <div className='mr-0 box-border'>
            <Home/>
            <Range/>
            <Productds/>
            <Rooms/>
            <Furniture/>
        </div>
    )
}