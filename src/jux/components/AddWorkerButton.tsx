import * as React from "react";
import { styled, css } from "@juxio/react-styled";

// AddWorkerButton Props
interface AddWorkerButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  hierarchy?: "primary";
}

const button_label_b3a3d10d = css({
  fontFamily: "Inter",
  fontWeight: "500",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "20px",
  display: "inline-block",
  color: "#FFFFFF",
});

const StyledAddWorkerButton = styled<"button", AddWorkerButtonProps>(
  "button",
  {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      height: "36px",
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "20px",
      padding: "8px 16px",
      borderRadius: "4px",
      borderStyle: "none",
      gap: "8px",
      cursor: "pointer",
      outline: "none",
      "&:active": {
        outline: "none",
      },
    },
    variants: [
      {
        props: {
          hierarchy: "primary",
          disabled: false,
        },
        style: {
          backgroundColor: "rgba(203, 77, 88, 1)",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(149, 39, 49, 1)",
          },
          "&:active": {
            backgroundColor: "rgba(109, 46, 53, 1)",
          },
        },
      },
      {
        props: {
          hierarchy: "primary",
          disabled: true,
        },
        style: {
          backgroundColor: "rgba(203,77,88,0.5)",
          cursor: "default",
          width: "100%",
        },
      },
    ],
  },
  {
    // Prevent non-valid HTML props from being passed to the DOM
    shouldForwardProp: (propName) => !["hierarchy"].includes(propName),
  },
);

export const AddWorkerButton = React.forwardRef<
  HTMLButtonElement,
  AddWorkerButtonProps
>(function AddWorkerButton(
  { disabled = false, hierarchy = "primary", ...otherProps },
  ref,
) {
  return (
    <StyledAddWorkerButton
      disabled={disabled}
      hierarchy={hierarchy}
      ref={ref}
      {...otherProps}
    >
      <span className={button_label_b3a3d10d}>Button</span>
    </StyledAddWorkerButton>
  );
});
