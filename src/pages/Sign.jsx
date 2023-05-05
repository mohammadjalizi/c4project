import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config';
import { useState } from 'react';
const Sign = () => {
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
          <input required  placeholder=" E-mail : "  type="email" />
          <input required placeholder=" Password : " type="password" />
          <button onClick={()=>{

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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