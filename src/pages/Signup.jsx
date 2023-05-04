import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { auth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  return (
    <>
        <Helmet>
<title>Sign-up</title>


    </Helmet>
<Header/>
<main>
<form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input required  placeholder=" E-mail : "  type="email" />
          <input required placeholder=" Password : " type="password" />
          <button onClick={()=>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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