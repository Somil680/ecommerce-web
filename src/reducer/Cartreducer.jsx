
const initalState = {
    Totalprice: 0,
    cart: [],
    AfterDiscounted_Price : null

    
   

}

function Cartreducer(cartState, action) {
    switch (action.type) {
        case "Add-to-cart":
            return {
                ...cartState,
                cart: [...cartState.cart, action.payload],
            };
        case "INCREASE-QTY":
            return {
                ...cartState,
                cart: cartState.cart.map((items) =>
                    items._id === action.payload ? { ...items, Quantity: items.Quantity + 1 } : items,),
                
                
            };
        case "DESCREASE-QTY":
            return {
                ...cartState,
                cart: cartState.cart.map((items) =>
                    items._id === action.payload ?
                        items.Quantity > 1 ? { ...items, Quantity: items.Quantity - 1 } : { ...items, Quantity: 1 } : items
                ),
                
               
            };
        case "REMOVE-FROM-CART":
            return {
                ...cartState,
                cart: cartState.cart.filter(items => items._id !== action.payload),
                Totalprice: Number(cartState.Totalprice) - Number(action.price),
              
            };
        case "GET-ORIGINAL-PRICE":
            const updatePrice = ((acc, curr) => acc + curr.intprice * curr.Quantity)
            const initialprice = cartState.cart.reduce(updatePrice, 0)
            return {
                ...cartState, Totalprice: initialprice
            };
        case "GET-DISCOUNTED-PRICE":
            const After_discounted_price = ((acc, curr) => acc + curr.price * curr.Quantity)
            const Discounted_price = cartState.cart.reduce(After_discounted_price, 0)
            return {
                ...cartState ,  AfterDiscounted_Price : Discounted_price
            }
            default:
                return cartState;    
            }   
        }
      
export {Cartreducer , initalState }