import Header from "../Header/Header";
import HomePage from "../../Pages/HomePage";
import ShopPage from "../../Pages/Shop";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className='mr-0 box-border'>
       <Header/>
       {/* <HomePage/> */}
       <ShopPage/>
       <Footer/>
    </div>
  );
}

export default App;
