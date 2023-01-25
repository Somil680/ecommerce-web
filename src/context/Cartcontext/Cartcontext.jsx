import { createContext, useContext, useReducer } from "react";
import { Cartreducer , initalState  } from "../../reducer/Cartreducer";

const CartContext = createContext([])

const CartProvider = ({ children }) => {
    
    const [cartState , dispatch] = useReducer(Cartreducer , initalState)

    return <CartContext.Provider
    value={{cartState , dispatch}}
    >{children}</CartContext.Provider>
}
 
const useCart = () => useContext(CartContext)

export {CartProvider , useCart}
