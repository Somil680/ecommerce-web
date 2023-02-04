import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function SignUp() {

    const [firstName, setFirstname] = useState()
    const [lastName, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password , setPassword] = useState()
   const Navigate = useNavigate()


    const signupHandler = async () => {
    const body = {
    firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }
  try {
    const response = await axios.post(`/api/auth/signup`, body);
    // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setTimeout(() => {
          Navigate("/Login")
      }, 1000);
    } catch (error) {
      console.log({body})
    console.log(error)
  }
};

    return <>
        
        <input type="text" onChange={(e) => {
            e.preventDefault()
            setFirstname(e.target.value)
        }} />
        <input type="text" onChange={(e) => {
            e.preventDefault()
            setLastname(e.target.value)
        }} />
        <input type="email" onChange={(e) => {
            e.preventDefault()
            setEmail(e.target.value)
        }} />
        <input type="text" onChange={(e) => {
            e.preventDefault()
            setPassword(e.target.value)
        }} />
        <button onClick={()=>signupHandler()}>SignUp</button>
    </> 

}
export {SignUp}