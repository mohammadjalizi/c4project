import React, { useEffect } from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
const About = () => {
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
<title>  About page</title>


    </Helmet>
<Header/>
 <Maincontent PageName="Aboutlpage"/>
<Footer/>
</>
  )
}

export default About