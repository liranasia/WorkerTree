import * as React from "react";
import { styled, css } from "@juxio/react-styled";
import { LeadingIcon } from "./LeadingIcon";
import { FormInput as Input } from "./FormInput";

// FormField Props
interface FormFieldProps extends React.ComponentPropsWithoutRef<"div"> {
  disabled?: boolean;
}

const label_de5971d7 = css({
  fontFamily: "Inter",
  fontWeight: "500",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "17px",
  display: "inline-block",
  color: "#6A6A6A",
  width: "auto",
  height: "auto",
});

const content_wrapper_3773b0da = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "9px 12px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#9C9C9C",
  borderRadius: "4px",
  alignSelf: "stretch",
  backgroundColor: "#FFFFFF",
  width: "100%",
  height: "36px",
  overflow: "hidden",
});

const leading_icon_ab05c7cd = css({
  display: "inline-block",
  color: "#9E9E9E",
});

const StyledFormField = styled<"div", FormFieldProps>("div", {
  root: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "6px",
  },
  variants: [
    {
      props: {
        disabled: true,
      },
      style: {},
    },
    {
      props: {
        disabled: false,
      },
      style: {
        "&:hover": {},
        "&:focus-within": {},
      },
    },
  ],
});

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField({ disabled = false, ...otherProps }, ref) {
    return (
      <StyledFormField
        disabled={disabled}
        ref={ref}
        {...otherProps}
        placeholder={"Placeholder"}
      >
        <span className={label_de5971d7}>label</span>
        <label>
          <div className={content_wrapper_3773b0da}>
            <LeadingIcon className={leading_icon_ab05c7cd} />
            <Input disabled={false} />
          </div>
        </label>
      </StyledFormField>
    );
  },
);
