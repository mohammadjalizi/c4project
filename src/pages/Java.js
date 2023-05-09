import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../Copm/Header'
import Footer from '../Copm/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
const Java = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
useEffect(()=>{
if(!user){

navigate("/Signin")


}



})
  return (
    <>
<Header/>
  <main>
  javascript page
  </main>
<Footer/>
</>

  )
}

export default Java