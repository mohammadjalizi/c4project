import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import './Theme.css'
import {useContext } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Config";
import ThemeContext from "../context/ThemeContext";
import { getAuth, signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const {Theme,toggletheme} = useContext(ThemeContext);

  return (
    <div className="myheader">
   
      <header className="hide-when-mobile">
        <h1>
          <Link to="/">c4a.dev</Link>
        </h1>
     
      <div className="icons">
      <i  onClick={()=>{
toggletheme(Theme==="Light"?"Dark":"Light")

      }} className="fa-sharp fa-solid fa-sun"></i>

      <i  onClick={()=>{

toggletheme(Theme==="Light"?"Dark":"Light")

      }}   class="fa-solid fa-moon"></i>
      </div>

        <ul className="flex">
        {!user &&  <li className="main-list">
            <NavLink className="main-link" to="/Signin">
            Sign-in
            </NavLink>
            </li>  }
            {user &&  <li onClick={()=>{

signOut(auth).then(() => {
 console.log(" Sign-out successful.")
}).catch((error) => {
  // An error happened.
});

            }} className="main-list">
            <button className="main-link signout">
            Sign-out
            </button>
            </li>  }
            {!user &&    <li className="main-list">
            <NavLink className="main-link" to="/Signup ">
            Sign-up 
            </NavLink>
            </li> }
      
         {user &&   <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li> }
        
         {user &&     <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </li> }
      
        </ul>
      </header>

      <header style={{ backgroundColor: "red" }} className="show-when-mobile">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;