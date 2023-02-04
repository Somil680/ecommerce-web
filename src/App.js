import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Checkout } from "./component/Checkout/Checkout";
import { RequiredAuth } from "./component/RequiredAuth";
import { Login } from "./pages/Auth/Login";
import { SignUp } from "./pages/index";
import {Home, Productlist , Cart , Wishlist , Singleproduct } from "./pages/index";

function App() {

  return (
    <div className="App">
      

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Singleproduct/:productId" element={<Singleproduct/>}/>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        

    </Routes>
      
      
      
    </div>
  );
}

export default App;
