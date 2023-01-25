import { Route, Routes } from "react-router-dom";
import "./App.css";


import {Home, Productlist , Cart } from "./pages/index";

function App() {

  return (
    <div className="App">
      

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/Cart" element={<Cart/>} />

    </Routes>
      
      
      
    </div>
  );
}

export default App;
