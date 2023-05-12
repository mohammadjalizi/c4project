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
  console.log(user);

  if (loading) {
    return (
      <div>
        <Header />

        <main>Loading........</main>
        <Footer />
      </div>
    );
  }




  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... <span>🧡</span>
          </p>
        </main>

        <Footer />
      </>
    );
  }


  

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName} <span>🧡</span>
            </p>
          </main>

          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName} <span>🧡</span>
            </p>

            <p>Please verify your email to continue ✋ </p>
            <button className="delete">Send email</button>
          </main>

          <Footer />
        </>
      );
    }
  }

 
};
export default Home