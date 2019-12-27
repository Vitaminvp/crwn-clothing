import React from "react";
import { CustomButtonContainer } from "./FormButton.style";

export const FormButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
