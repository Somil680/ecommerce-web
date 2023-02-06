import "./Navbar.css"
import React  from "react";
import { Link } from "react-router-dom"
import { useCart, useWishlist } from "../../context";
import { logo } from "../../Images";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { auth , setAuth } = useAuth()
  const { isAuth } = auth
  {isAuth ? console.log(isAuth) : console.log(isAuth)}
  console.log(auth.userName)
const { cartState } = useCart()
  const { cart } = cartState
  const { wishState } = useWishlist()
  const { wishlistItem } = wishState
  
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
        <div>
          <i className="bi bi-heart icon padding"></i>
          <p className="wish-num" >{wishlistItem.length}</p>
        </div>
      </Link>
    <div>
      {isAuth ? <h3 className="padding">Hi ,{auth.userName}</h3> :
          <h3 className="padding">Hi,User</h3>}
    </div>
         
    <div>
      <Link to="/Login">
        {isAuth ?  <button  onClick={()=> setAuth(auth => ({token:"",isAuth:false,userName:""}))}>Logout</button> : <button >Login</button>}
      </Link>
    </div>
  
</div>
</nav>
</div>
);
}
export  {Navbar};