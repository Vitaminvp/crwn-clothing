import React from "react";
import classNames from "classnames";
import "./FormButton.scss";

export const FormButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={classNames("custom-button", {
      "google-sign-in": isGoogleSignIn,
      inverted
    })}
    {...otherProps}
  >
    {children}
  </button>
);
