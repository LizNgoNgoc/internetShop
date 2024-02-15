import Header from "../Header/Header";
import HomePage from "../../Pages/HomePage";
import ShopPage from "../../Pages/Shop";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='mr-0 w-[1440px] box-border'>
       <Header/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
