import "./Wishlist.css"
import React from "react";
import { BsHeartFill  , BsHeart} from "react-icons/bs";
import { useCart , useWishlist } from "../../context";
import { findInArray } from "../../utensiles/find";
import {  useNavigate } from "react-router-dom";

function WishlistVeiw({ products}) {

const { _id, image, title, author, price, categoryName, intprice, discount } = products
const { cartState , dispatch } = useCart()
const { wishState, wishDispatch } = useWishlist()
const Navigate = useNavigate()
    
const isInCart = findInArray(_id, cartState.cart)
const cartHandler = (id, products) => {       
if (isInCart) {
    Navigate("/Cart")
} else {
    dispatch({
    type: "Add-to-cart",
    payload: products
 })
    // toast.success('Added To Cart!');
    console.log("add to cart")
}}

const isInWishlist = findInArray(_id, wishState.wishlistItem);
const wishHandler = (id, products) => {
if (isInWishlist) {
// Navigate("/Wishlist")
} else {
    wishDispatch({ type: "Add-to-Wishlist", payload: products})
    console.log("add to wishlist")
}}
        
return <>
<div key={_id} className="item-grid" >       
{isInWishlist ?
<BsHeartFill size="1.5rem" className="wish-icon" onClick={() => wishDispatch({type :  "REMOVE-FROM-WISHLIST" , payload : _id})} /> : <BsHeart size="1.5rem" className="wish-icon" onClick={() => wishHandler(_id, products)} />} 
            
<div className="item-image-div">
    <img src={image} alt="" className="item-image" />
</div> 
            
<div className="item-desc">
    <h4 className="item-title">{title}</h4>
    <h5 className="item-author">{author}</h5>
    <p className="item-category">{categoryName}</p>
                
    <div className="item-price-div">
        <p className="item-price">Rs.{price}</p>
        <p className="item-intprice">Rs.{intprice}</p>
        <p className="item-discount">({discount})</p>
    </div>
        <div className="wishlist-btn-div">
            <button className="item-add" onClick={() => cartHandler(_id, products)}>
                        {isInCart ? "Go To Cart" : "Move To Cart"} </button>
        </div>    
</div>
</div>
</>
}
export { WishlistVeiw }


