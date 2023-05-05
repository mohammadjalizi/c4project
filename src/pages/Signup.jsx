import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
const Signup = () => {
  const[email,Setemail]=useState("")
  const[password,Setpassword]=useState("")
  return (
    <>
        <Helmet>
<title>Sign-up</title>


    </Helmet>
<Header/>
<main>
<form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input onChange={(eo)=>{

Setemail(eo.target.value)


          }} required  placeholder=" E-mail : "  type="email" />
          <input  onChange={(eo)=>{

Setpassword(eo.target.value)


          }}   required placeholder=" Password : " type="password" />
          <button onClick={(eo)=>{
eo.preventDefault()
createUserWithEmailAndPassword(auth, email, password)


  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("doneeeeeeee")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("erorrrrrrr")
    // ..
  });


          }}>Sign up</button>
          <p className="account">
          Already hava an account <Link to="/Signin"> Sign-in</Link>
          </p>
        </form>
  </main>
<Footer/>
</>
  )
}

export default Signup