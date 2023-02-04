import { useNavigate , useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import React from 'react';

function RequiredAuth({children}) {
    const { isLoggedIn } = useAuth()
    const Navigate = useNavigate()
    const location = useLocation()
    return isLoggedIn ? children : <Navigate to="/Login"  state={{from : location}} replace/>
}
export {RequiredAuth}