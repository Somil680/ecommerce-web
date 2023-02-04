
import React from "react";
import "./Cart.css"
import { useCart } from "../../context";
import { MdDelete } from "react-icons/md";



function CartmanagementView({products }) {
     const { _id, image, title, author, price, categoryName, intprice, discount  , Quantity} = products
    const {cartState , dispatch } = useCart()
    const { cart} = cartState
    
    //  const Totalcardqty = ((acc , curr) =>  acc + curr.Quantity)
    //  const toqty = cartState.cart.reduce(Totalcardqty , 0)
    // console.log(toqty)
    // <div><h3>Total Quantity : {toqty}</h3></div>
     
return <>
<div key={_id} className="sub-container" >
        <img src={image}  className="cart-image" />
    <div className="desc-container">     
       <div className="item-desc">
    <h4 className="item-title">{title}</h4>
    <h5 className="item-author">{author}</h5>
    <p className="item-category">{categoryName}</p>
                
    <div className="item-price-div">
        <p className="item-price">Rs.{price}</p>
        <p className="item-intprice">Rs.{intprice}</p>
        <p className="item-discount">({discount})</p>
    </div>
    </div>
        <div className="inc-quantity">
             <div className="d-flex">       
        <button className="inc-btn" onClick={() =>dispatch({ type: "INCREASE-QTY", payload: _id ,price : price })}>+</button>
        <p className="qty">{Quantity}</p>
        <button className="inc-btn" onClick={() => dispatch({ type: "DESCREASE-QTY", payload: _id, price: price })}>-</button>
            </div>          
      <MdDelete size="1.5rem" onClick={()=>dispatch({type:"REMOVE-FROM-CART" , payload: _id ,price : price})} />
      
      </div>
    </div>
</div>
         
  
 









     </>
}
 export {CartmanagementView}