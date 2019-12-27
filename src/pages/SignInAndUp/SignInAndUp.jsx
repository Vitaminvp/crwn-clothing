import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { SignInAndSignUpContainer } from "./SignInAndUp.style";

export const SignInAndUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);
