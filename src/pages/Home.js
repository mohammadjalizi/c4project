import React, { useContext } from 'react'
import Header from '../Copm/Header'
import { Helmet } from 'react-helmet-async';
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
// ===========    

// level2
// =========
import ThemeContext from "../context/ThemeContext";




const Home = () => {
  const {Theme}=useContext(ThemeContext)
  return (
    <>
    <Helmet>
<title>Homepage</title>
<meta name='description'  content='homeeee'/>

    </Helmet>

<div className={`${Theme}`}>

   
<Header/>
<Maincontent PageName="Home"/>
<Footer/>
</div>
</>
  )
}

export default Home