import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../Copm/Header'
import Footer from '../Copm/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
useEffect(()=>{
if(!user){

navigate("/")


}



},[user])

  return (
    <>
    <Helmet>

      <title>Profile</title>
      <style type='text/css'>

{
  `
  main{

    flex-direction: column;
  }
  `
}

      </style>
    </Helmet>
<Header/>
  <main>
<h6> Emaile\:  {user.email}</h6>
<h6>  UserName:{user.displayName}  </h6>
<h6> last sign-in:  </h6>
<h6> Account Created: </h6>
<button className='delete'>  Delete account  </button>
  </main>
<Footer/>
</>

  )
}

export default Profile