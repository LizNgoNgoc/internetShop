import Header from "../Header/Header";
import HomePage from "../../Pages/HomePage";
import ShopPage from "../../Pages/Shop";
import ProductDescription from "../../Pages/ProductDescription";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "../../Pages/Product";

function App() {
  return (
    <div className='w-[1440px] box-border m-auto'>
       <Header/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/description" element={<ProductDescription/>}/>
          <Route path="/shop/product/:id" element={<Product/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
