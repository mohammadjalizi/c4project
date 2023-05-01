import React from 'react'
import Header from '../Copm/Header'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'

const Home = () => {
  return (
    <>
    <Helmet>
<title>Homepage</title>
<meta name='description'  content='homeeee'/>

    </Helmet>
<Header/>
<Maincontent PageName="Home"/>
<Footer/>
</>
  )
}

export default Home