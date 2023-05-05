import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config';
import { useState } from 'react';
const Sign = () => {
  const navigate = useNavigate();
  const[email,Setemail]=useState("")
  const[password,Setpassword]=useState("")
  return (
    <>
        <Helmet>
<title>Sign-in</title>


    </Helmet>
<Header/>
<main>
<form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input  onChange={(eo) => {
            Setemail(eo.target.value)
          }
          } required  placeholder=" E-mail : "  type="email" />
          <input onChange={(eo) => {
            Setpassword(eo.target.value)
          }
          } required placeholder=" Password : " type="password" />
          <button onClick={(eo)=>{
          
eo.preventDefault()
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

          }}>Sign in</button>
          <p className="account">
          Already hava an account <Link to="/Signup"> Sign-up</Link>
          </p>
        </form>
  </main>
<Footer/>
</>
  )
}

export default Sign