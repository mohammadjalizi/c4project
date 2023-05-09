import React from 'react'
import Header from '../Copm/Header'
import { Helmet } from 'react-helmet-async';
import Maincontent from '../Copm/Maincontent'
import Footer from '../Copm/Footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
import { Link } from 'react-router-dom';
// ===========    

// level2
// =========





const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  return (
    <>
    <Helmet>

  
<title>Homepage</title>
<meta name='description'  content='homeeee'/>

    </Helmet>



   
<Header/>
{user &&<Maincontent PageName="Home"/> }

{!user &&     <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/Signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>

}

<Footer/>

</>
  )
}

export default Home