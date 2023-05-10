import Header from "../Copm/Header";
import Footer from "../Copm/Footer";

import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import Moment from "react-moment";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user &&!loading) {
      navigate("/");
    }
  });
  if(loading){
return (
<>

<Header/>


<main>
<h3>  LOADING...............  </h3>

</main>
<Footer/>

</>


)

  }
  if(error){
  return(
    <>
    <main> Eroor:{error}  </main>
    </>
  )

  }
if(user){

  return (
    <>
      <Helmet>
        <title>Profile</title>

        <style type="text/css">{` 
        main{
          flex-direction: column;
    

    align-items: start;

    width: fit-content;
    margin: auto;
        }

        .delete{
          margin-top: 25px;
        background-color:  #dc3545;
        padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    border-color: #dc3545;
        }
        
        `}</style>
      </Helmet>
      <Header />

      <main>
        <h6>Email: {user.email}</h6>
        <h6>UserName: {user.displayName}</h6>

        <h6>
          Last Sign-in : <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
        </h6>

        <h6>
          Account Created : <Moment fromNow date={user.metadata.creationTime} />
        </h6>
        <button className="delete">Delete account</button>
      </main>
      <Footer />
    </>
  );
}
 
};

export default Profile;