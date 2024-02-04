import Header from "../Header/Header";
import Home from "../Home/Home";
import Range from "../Range.jsx/Range";
import Productds from "../Products/Products";
import Rooms from "../Rooms/Rooms";
import Furniture from "../Furniture/Furniture";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className='mr-0 box-border'>
       <Header/>
       <Home/>
       <Range/>
       <Productds/>
       <Rooms/>
       <Furniture/>
       <Footer/>
    </div>
  );
}

export default App;
