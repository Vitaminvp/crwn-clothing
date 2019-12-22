import React from "react";
import classNames from "classnames";
import "./FormButton.scss";

export const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={classNames("custom-button", {
      "google-sign-in": isGoogleSignIn
    })}
    {...otherProps}
  >
    {children}
  </button>
);
