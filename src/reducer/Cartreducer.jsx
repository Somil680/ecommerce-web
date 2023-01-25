// import {useParams} from "react-router-dom"
// import { products } from "../../backend/db/products";

const initalState = {
    // CartItem: 0,
    Totalprice : 0,
    cart: [],
    // addbutton: "Add to Cart"
}
// const { productId } = useParams();

// function getProductDetails(cart, productId) {
//     const { productId } = useParams();
//     return cart.find((products) => products._id === productId);
// }

// const product = getProductDetails(products, productId);
// console.log(product)

function Cartreducer(cartState, action) {
    switch (action.type) {
        case "Add-to-cart":
            return {
                ...cartState,
                cart: [...cartState.cart, action.payload],
                // cart: [...state.product, action.payload],
                // cart: [ ...state.cart ,find(() => action.payload._id === "_id"), action.payload],
                // CartItem: state.CartItem + 1,
                Totalprice : Number(cartState.Totalprice) + Number(action.payload.price),
                // addbutton:  action.addbutton 
                
            };
            
            
            default:
                return cartState;
                
            }
            
            
            
        }
      
export {Cartreducer , initalState }