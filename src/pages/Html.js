import React from 'react'
import Header from '../Copm/Header'
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { Helmet} from 'react-helmet-async';

const Html = () => {
  return (
    <>
        <Helmet>
<title>Htmlepage</title>
<meta name='description'  content='htmleeee'/>

    </Helmet>
<Header/>
 <Maincontent PageName="Htmlpage"/>
<Footer/>
</>
  )
}

export default Html