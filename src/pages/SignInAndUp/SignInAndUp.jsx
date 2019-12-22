import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SignInAndUp.scss";

export const SignInAndUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
