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
  const[hasEroor,SethasEroor]=useState(false)
  const[firebaseror,Setfirebaseror]=useState(false)
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
    // if(errorCode==="auth/invalid-email"){

    //   Setfirebaseror("wrong Email")

    // }else if(errorCode==="auth/user-not-found"){

    //   Setfirebaseror("wrong Email...")
    // }
    // else{
    //   Setfirebaseror(errorCode)

    // }
    import Header from "../comp/header";
    import Footer from "../comp/Footer";
    import { Link } from "react-router-dom";
    import { Helmet } from "react-helmet-async";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { auth } from '../firebase/config';
    import { useState } from 'react';
    import { useNavigate } from "react-router-dom";
    
    
    const Signin = () => {
      const navigate = useNavigate();
      const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      const [hasError, sethasError] = useState(false);
      const [firebaseError, setfirebaseError] = useState("");
    
      return (
        <>
          <Helmet>
            <title>Signin</title>
          </Helmet>
          <Header />
    
          <main>
    
            <form>
    
    
              <input onChange={(eo) => {
                setemail(eo.target.value)
              }} required placeholder=" E-mail : " type="email" />
    
    
    
              <input onChange={(eo) => {
                setpassword(eo.target.value)
              }} required placeholder=" Password : " type="password" />
    
    
    
    
              <button onClick={(eo) => {
                eo.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/");
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
    
    
    
                    sethasError(true)
    
    
                    switch (errorCode) {
    
                      case "auth/invalid-email":
                        setfirebaseError("Wrong Email")
                        break;
    
    
                      case "auth/user-not-found":
                        setfirebaseError("Wrong Email")
                        break;
    
    
                      case "auth/wrong-password":
                        setfirebaseError("Wrong Password")
                        break;
    
    
                      case "auth/too-many-requests":
                        setfirebaseError("Too many requests, please try aganin later")
                        break;
    
    
                      default:
                        setfirebaseError("Please check your email & password")
                        break;
    
                    }
    
    
                  });
          }}>Sign in</button>
          <p className="account">
          Already hava an account <Link to="/Signup"> Sign-up</Link>
          </p>
          {hasEroor &&<h2>{firebaseror}</h2>}
        </form>
  </main>
<Footer/>
</>
  )
}

export default Sign