import React, { useEffect } from "react";
import "./Cart.css"
import { background } from "../../Images/index"
import { useCart } from "../../context";
import { Navbar , Footer, Price } from "../../component";
import { CartmanagementView } from "./CartmanagementVeiw";
import { Link } from "react-router-dom";

function Cart() {

const {cartState , dispatch} = useCart()
  const { cart} = cartState
  const backgroundstyle = {
  display : 'block',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height : '500px',
  width: '100%'
  }
  useEffect(() => {
    dispatch({type : "GET-ORIGINAL-PRICE"})
    dispatch({ type: "GET-DISCOUNTED-PRICE" })
    dispatch({type : "GET-ALL-QTY-INCART"})
  } , [cart])
 
return <>
  <Navbar />
  
 <div className="PAGE-CONTAINER">
 <div  style={cart.length ===0 ? backgroundstyle : null}>
   <div className={cart.length ===0 ? 'hide' : ''} >
      <div className="product-container " >
        {cart.map((item) => <CartmanagementView products={item}  key={item._id} />)}
      </div>

<div className="totalpage">
      <Price />
          <div className="s-flex">
            <button className=""><Link to="/Checkout">Check Out</Link></button>
          </div> 
        
</div>
</div>
</div>
</div>
  <Footer />
</>
}
export {Cart}