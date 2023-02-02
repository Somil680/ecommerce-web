import { Route, Routes } from "react-router-dom";
import "./App.css";


import {Home, Productlist , Cart , Wishlist , Singleproduct } from "./pages/index";

function App() {

  return (
    <div className="App">
      

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Singleproduct/:productId" element={<Singleproduct/>}></Route>
        

    </Routes>
      
      
      
    </div>
  );
}

export default App;
