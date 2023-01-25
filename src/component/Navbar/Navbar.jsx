import "./Navbar.css"
import React  from "react";
import { Link } from "react-router-dom"
import { useCart } from "../../context";

function Navbar() {

const { cartState } = useCart()
const { cart  } = cartState

  
  return (
      <div className="body-container">
          <nav  className="d-flex">
        <div className="padding-20">
          <Link to="/">
            <h1>booooks</h1>

          </Link>
              </div>

        <div className="d-flex padding">

         
          <Link to="/Cart ">
              <i className="bi bi-cart3 icon padding"></i>
            <p className="cart-num" >{cart.length}</p>
          </Link>
        


                <a href=""><i className="bi bi-heart icon padding"></i></a>
            
                  <h3 className="padding">user name</h3>
                  <button className="padding">Login</button>
              </div>
          </nav>
         

    </div>
  );
}
export  {Navbar};