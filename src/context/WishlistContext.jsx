import { createContext, useContext, useReducer } from "react";
import {wishlistReducer , initalWishlist} from "../reducer/Index"

const wishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    

    const [wishState, wishDispatch] = useReducer(wishlistReducer, initalWishlist)

    return <wishlistContext.Provider
    value={{wishState, wishDispatch}}
    >{children}</wishlistContext.Provider>
}

const useWishlist = () => useContext(wishlistContext)

export {useWishlist , WishlistProvider}