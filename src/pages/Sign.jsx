import Header from "../Copm/Header";
import Footer from "../Copm/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Sign = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>

        <form>


          <input onChange={(eo) => {
            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />



          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />




          <button onClick={(eo) => {
            eo.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;



                sethasError(true)


                switch (errorCode) {

                  case "auth/invalid-email":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/user-not-found":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/wrong-password":
                    setfirebaseError("Wrong Password")
                    break;


                  case "auth/too-many-requests":
                    setfirebaseError("Too many requests, please try aganin later")
                    break;


                  default:
                    setfirebaseError("Please check your email & password")
                    break;

                }


              });
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/Signup"> Sign-up</Link>
          </p>

          {hasError && <h2>{firebaseError}</h2>}

        </form>




      </main>
      <Footer />
    </>
  );
};

export default Sign;