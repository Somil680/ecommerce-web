import { createContext, useContext, useState } from "react";


const Authcontext = createContext({ isLoggedIn: false })

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    
    return <Authcontext.Provider value={{isLoggedIn , setisLoggedIn}}
    >{children}</Authcontext.Provider>
}

const useAuth = () => useContext(Authcontext)

export {AuthProvider , useAuth}    