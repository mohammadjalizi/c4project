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
<form>

<input type='email'/>
<input type='password'/>
<button>sign in</button>
</form>
  </main>
<Footer/>
</>
  )
}

export default Sign