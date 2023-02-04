import React from 'react';
import { Login_img, logo } from '../../Images';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
    const { isLoggedIn, setisLoggedIn} = useAuth()
    const Navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    return <>
         <div className="body-container">
          <nav  className="d-flex">
        <div className="padding-20">
          <Link to="/">
         <img src={logo} alt="" className="logo" />
          </Link>
                </div>
                </nav>
        </div>
        <div className="LoginCompoenent">

            <div className="Login-Image">
                {/* <img src="https://search.muz.li/ODkyNWViZDQy" alt="" /> */}
                {/* <img src={Login_img} className="Login-Image" /> */}
            </div>

            <div className="login-detail">
                <h3>Welcome to BOOKIES</h3>
                 
                <h5>LogIn</h5>
                <p>Enter your Credentials </p>
                <div className=''>
                     <Link to="/SignUp"> SignUp</Link>
                    <input type="email"  placeholder='xyz@gmail.com'/>
                    <input type="password"  placeholder='Password' />
                    <button onClick={() => {setisLoggedIn(isLoggedIn => !isLoggedIn)
                    Navigate(location?.state?.from?.pathname)}}> {isLoggedIn ? "logout" : "login"}</button>
                </div>
            </div>
        </div>

    </>
}
export {Login}