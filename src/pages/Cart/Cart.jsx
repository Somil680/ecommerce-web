import React, { useEffect } from "react";
import "./Cart.css"

import { background } from "../../Images/index"
import { useCart } from "../../context";
import { Navbar , Footer } from "../../component";
import { CartmanagementView } from "./CartmanagementVeiw";

function Cart() {
const {cartState , dispatch} = useCart()
  const { cart, Totalprice, AfterDiscounted_Price } = cartState
  const SavingOnProduct = Totalprice - AfterDiscounted_Price;

  
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
    dispatch({type : "GET-DISCOUNTED-PRICE"})
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
      <h3 className="totalpage-h3" >Price Detail</h3><hr />
  <div className="s-flex height">
      <h3>Price </h3>
      <h3>Rs.{Totalprice} </h3>
          
  </div>
  <div className="s-flex  height">
      <h3>Discount: </h3>
          <h3 className="color">-Rs.{SavingOnProduct}</h3>
  </div>
  <div className="s-flex height ">
      <h3 > Delivery Charges</h3>
      <h3 className="color">FREE</h3>
  </div>
  <div className="s-flex sep-part">
      <h3>Total Amount </h3>
      <h3>Rs.{ AfterDiscounted_Price}</h3>
  </div>
  <div className="s-flex color inbold ">
          <p>You will be save ₹{SavingOnProduct } on this order</p>
  </div>
          <div className="s-flex">
            <button>Place Order</button>
          </div> 
        
</div>
</div>
</div>
</div>
  <Footer  style={{ position :" absolute" , bottom :"0px" }} />
</>
}
export {Cart}