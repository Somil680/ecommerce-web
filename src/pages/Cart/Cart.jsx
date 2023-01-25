import React from "react";
import "./Cart.css"
import { useCart } from "../../context";
import { Navbar} from "../../component";

// import { useState , useEffect } from "react";

function Cart() {

    const {cartState } = useCart()
    const { cart , Totalprice } = cartState
    //   const [inCart, setInCart] = useState(false);
    //   useEffect(() => {
    // const itemInCart = cart.find(cart => cart._id === items._id);
    // if (!itemInCart) {
    //   setInCart(true);
    //   // add item to cart
    // }
    //   }, [items]);
    
    console.log(Totalprice)
 
    return <div>
        <Navbar/>
<h2>cart componemt</h2>
  
        <div className="product-container">
          {
              
              cart.map((items) => (
                  <div key={items._id} className="sub-container" >
                      <img src={items.image} alt="" width="200px" className="cart-image" />
            <div className="desc-container">     
              <h2 className="cart-title" >{items.title}</h2>
              <h3 className="cart-author">{items.author}</h3>
                    <p className="cart-price">{items.price}</p>
                    
                          <div className="inc-quantity">
                     <button
                        //   onClick={() => dispatch({ type: "Add-to-cart" })}
                        >+</button>
                          <p className="padding">1</p>
                      <button
                        //   onClick={() => dispatch({ type: "Add-to-cart" })}
                        >-</button>
                        </div>
                        </div>
            </div>
          ))
        }
        </div>
        <div className="totalpage">
            <h3 className="totalpage-h3" >Price Detail</h3>
            <hr />
            <div className="s-flex">
                <h3>Price </h3>
                <h3>{Totalprice} </h3>
            </div>
            <div className="s-flex">
                
            <h3>Discount: </h3>
           </div>
            <div className="s-flex ">
            <h3 > Delivery Charges</h3>
            <h3 className="color">FREE</h3>
            </div>
            <hr />
            <div className="s-flex">
                <h3>Total Price </h3>
                <h3>{ Totalprice}</h3>
            </div>
       </div>

        </div>
   

}

export {Cart}