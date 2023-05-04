import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';

const Sign = () => {
  return (
    <>
        <Helmet>
<title>Sign-in</title>


    </Helmet>
<Header/>
<main>
 sign-in
  </main>
<Footer/>
</>
  )
}

export default Sign