import * as React from "react";
import { styled } from "@juxio/react-styled";

// FormInput Props
interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  disabled?: boolean;
}

const StyledFormInput = styled<"input", FormInputProps>("input", {
  root: {
    width: "auto",
    height: "34px",
    padding: "9px 12px",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Inter",
    color: "#3B3B3B",
    backgroundColor: "#FFFFFF",
    border: "none",
    display: "inline-block",
    outline: "none",
    "&::placeholder": {
      color: "#9C9C9C",
    },
  },
  variants: [],
});

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  function FormInput({ disabled = false, ...otherProps }, ref) {
    return (
      <StyledFormInput
        disabled={disabled}
        ref={ref}
        {...otherProps}
        placeholder={"Placeholder"}
        value={"Value"}
      />
    );
  },
);
