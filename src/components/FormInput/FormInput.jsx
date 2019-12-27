import React from "react";
import classNames from "classnames";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./FormInput.style";

export const FormInput = ({ handleChange, label, ...props }) => {
  const className = classNames({ shrink: props.value.length });
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={className}>{label}</FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};
