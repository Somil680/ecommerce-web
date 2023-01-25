import "./productlist.css"
import React     from "react";
import { useCart } from "../../context";
import  {findInArray} from "../../utensiles/find";



function CartVeiw({products}) {
    
    const {_id , image , title , author , price , categoryName ,intprice , discount} = products
    const { cartState } = useCart()
    const { dispatch } = useCart()
  


    const isInCart = findInArray(_id, cartState.cart)
    const cartHandler = (id, products) => {

        if (isInCart) {
            console.log("already in cart")
            //  navigate("/Cart")

        } else {
            dispatch({
                type: "Add-to-cart",
                payload: products
            })
            // toast.success('Added To Cart!');
            console.log("add to cart")
        }
 
        // const isInWish
    
    
        
        
        
    }
    return<>
        <div key={_id} className="item-grid" >
            <span>
              <i className="bi bi-heart icon padding"/>

            </span>
             
            <div className="item-image-div">
                <img src={image} alt="" className="item-image" />
            </div> 
            
        <div className="item-desc">
                 <h3 className="item-title">{title}</h3>
                 <h4 className="item-author">{author}</h4>
                 <p className="item-category">{categoryName}</p>
                
            <div className="item-price-div">
                     <p className="item-price">Rs.{price}</p>
                     <p className="item-intprice">Rs.{intprice}</p>
                     <p className="item-discount">({discount})</p>
            </div>
                 
            <div className="wishlist-btn-div">
                     <button className="item-add" onClick={() =>cartHandler(_id,products)}>{isInCart?"Go To Cart":"Add To Cart"}</button>
                    
                     
            </div>    
        </div>
</div>
       
      


</>
}

export { CartVeiw }


