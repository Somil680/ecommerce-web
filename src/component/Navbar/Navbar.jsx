import "./Navbar.css"
import React  from "react";
import { Link } from "react-router-dom"
import { useCart, useWishlist } from "../../context";
import { logo } from "../../Images";
function Navbar() {

const { cartState } = useCart()
  const { cart } = cartState
  const { wishState } = useWishlist()
  const {wishlistItem} = wishState

  
  return (
      <div className="body-container">
          <nav  className="d-flex">
        <div className="padding-20">
          <Link to="/">
         <img src={logo} alt="" className="logo" />
          </Link>
        </div>

        <div className="d-flex padding">

         
          <Link to="/Cart ">
            <i className="bi bi-cart3 icon padding"></i>
            
            <p className="cart-num" >{cart.length} </p>
          </Link>
        


          <Link to="/Wishlist">
            <i className="bi bi-heart icon padding"></i>
            <p className="wish-num" >{wishlistItem.length}</p>

          </Link>
            
          <h3 className="padding">user name</h3>
          <Link to="/Login">
                  <button className="cardbutton padding">Login</button>
          </Link>
              </div>
          </nav>
         

    </div>
  );
}
export  {Navbar};