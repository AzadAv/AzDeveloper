import React from "react";
import { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Sign.css";
import GButton from "./images/GButton.png";
import FButton from "./images/FButton.png";

function Sign(props) {
  //Language
  const data = {
    en: {
      buttons: ["Sign In", "Sign Up"],
      signIn: [
        "Email or Phone Number",
        "Password :",
        "Forgot password ? ",
        "Connect with :",
      ],
    },

    az: {
      buttons: ["Daxil Ol", "Qeydiyyat"],
      signIn: [
        "Email və ya əlaqə nömrəsi",
        "Şifrə :",
        "Şifrəni unutmusunuz ? ",
        "Əlaqə qur :",
      ],
    },
  };

  //Refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //Advertisement
  const [advertisement, advertisementHandler] = useState("");
  //Sign In
  const [signInOpen, signInHandler] = useState(false);
  const [signInButton, signInButtonHandler] = useState("");
  const [signIn, openSignInForm] = useState("None");
  //Sign In Handler
  const changeSignInStyle = () => {
    if (signInOpen == false) {
      //advertistement div
      advertisementHandler("None");

      //sig in div
      openSignInForm("");
      signInHandler(true);

      //sign in button
      signInButtonHandler("active");
      //sign up button

      signUpButtonHandler("");

      //sign up div
      openSignUpForm("None");
      signUpHandler(false);
    } else {
      //advertistement div
      advertisementHandler("");

      //sig in div
      openSignInForm("None");
      signInHandler(false);

      //sign in button
      signInButtonHandler("");
    }
  };

  //Sign Up
  const [signUpOpen, signUpHandler] = useState(false);
  const [signUpButton, signUpButtonHandler] = useState("");
  const [signUp, openSignUpForm] = useState("None");
  //Sign Up Handler
  const changeSignUpStyle = () => {
    if (signUpOpen == false) {
      advertisementHandler("None");

      openSignUpForm("");
      signUpHandler(true);

      signUpButtonHandler("active");

      signInButtonHandler("");

      openSignInForm("None");
      signInHandler(false);
    } else {
      advertisementHandler("");

      openSignUpForm("None");
      signUpHandler(false);

      openSignInForm("None");
      signInHandler(false);

      signUpButtonHandler("");
    }
  };


  function SubmitHandler(event){

      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      alert(enteredEmail);
      alert(enteredPassword);

  }
  return (
    <div className="signContainer">
      <div className={"advertisement" + props.colors + advertisement}>
        <h1>{props.language ? "Learn programming with AzDeveloper":"Proqramlaşdırmanı AzDeveloper ilə öyrən"}</h1>
      </div>

      <div className={"header" + props.colors}>
        <button className={signInButton} onClick={changeSignInStyle}>
          {props.language ? data.en.buttons[0] : data.az.buttons[0]}
        </button>
        <button className={signUpButton} onClick={changeSignUpStyle}>
          {props.language ? data.en.buttons[1] : data.az.buttons[1]}
        </button>
      </div>

      <div className={"signInContainer" + props.colors + signIn}>
        <form onSubmit={SubmitHandler}>
          <label>
            {props.language ? data.en.signIn[0] : data.az.signIn[0]}
          </label>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
            placeholder="user@example.com"
          />
          <label>
            {props.language ? data.en.signIn[1] : data.az.signIn[1]}
          </label>
          <input 
          type="password" 
          id="password"
          required
          ref={passwordInputRef}
          placeholder=""

          />
          <p>
            <a href="">
              {props.language ? data.en.signIn[2] : data.az.signIn[2]}
            </a>
          </p>
          <p>{props.language ? data.en.signIn[3] : data.az.signIn[3]}</p>
          <div className={"signButtons"+props.colors}>
            <p>
              <img src={GButton}></img>Facebook
            </p>
            <p>
              <img src={FButton}></img>Google
            </p>
          </div>
          <div className={"signButtons"+props.colors}>
          <button >Sign In</button>
          </div>
        </form>
      </div>

      <div className={"signUpContainer" + props.colors + signUp}>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <label>Repeat Password</label>
        <input></input>
        <div>
          
        </div>
        <div className={"signButtons"+props.colors}>
          <p>
            <img src={GButton}></img>Facebook
          </p>  
          <p> 
              <img src={FButton}></img>Google
          </p>   
        </div>
        <div className={"signButtons"+props.colors}>
          <button >Sign Up</button>
          </div>
      </div>

      <div className={"footer" + props.colors}>
        {/* <a href='/home'><button >Visit as Guest</button></a> */}
        <NavLink to="/home" className={"navLink"}>
          Visit as Guest
        </NavLink>
      </div>
    </div>
  );
}

export default Sign;
