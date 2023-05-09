import React from 'react'
import Header from '../Copm/Header'
import { Helmet } from 'react-helmet-async';
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
// ===========    

// level2
// =========





const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
    <Helmet>

  
<title>Homepage</title>
<meta name='description'  content='homeeee'/>

    </Helmet>



   
<Header/>
{user &&<Maincontent PageName="Home"/> }

{!user &&  <main>

<p>   pleas sing ing for continu   </p>

</main> }

<Footer/>

</>
  )
}

export default Home