import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { useValidateForm } from "./utils/useValidateForm";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleFormSubmit = () => {
    const error = useValidateForm(
      nameRef?.current?.value || " ",
      emailRef.current?.value,
      passwordRef.current?.value,
    );
    if (error) {
      setErrorMessage(error);
    } else if (!isSignIn) {
      //Sign up Logic
      console.log("i am signing up!!!");

      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed up
          console.log("i am signing up!!!");
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  console.log("Login component re-rendered");

  const handleOnClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/NP-en-20250217-TRIFECTA-perspective_76dcb6f9-24a4-4224-8132-cb79a5094f75_large.jpg" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 top-0 text-white"
      >
        <h1 className="font-bold text-3xl text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 m-2"
            name="name"
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
        )}
        <input
          className="p-2 m-2"
          name="email"
          type="text"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          className="p-2 m-2"
          name="passowrd"
          type="passoword"
          placeholder="Password"
          ref={passwordRef}
        />
        <p>{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-700 rounded"
          onClick={handleFormSubmit}
        >
          Sign In
        </button>
        <p className="text-white-500">
          Need Help?{" "}
          <span className="cursor-pointer underline" onClick={handleOnClick}>
            {!isSignIn ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
