import * as React from "react";
import { styled } from "@juxio/react-styled";
import { FormField as NameTextField } from "./FormField";
import { FormField as RoleTextField } from "./FormField";
import { FormField as EmailTextField } from "./FormField";
import { AddWorkerButton } from "./AddWorkerButton";

// NewWorkerForm Props
interface NewWorkerFormProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledNewWorkerForm = styled<"div", NewWorkerFormProps>("div", {
  root: {
    width: "auto",
    height: "auto",
    backgroundColor: "#FFFFFF",
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "none",
    gap: "10px normal",
  },
  variants: [],
});

export const NewWorkerForm = React.forwardRef<
  HTMLDivElement,
  NewWorkerFormProps
>(function NewWorkerForm({ ...otherProps }, ref) {
  return (
    <StyledNewWorkerForm ref={ref} {...otherProps}>
      <NameTextField disabled={false} />
      <RoleTextField disabled={false} />
      <EmailTextField disabled={false} />
      <AddWorkerButton hierarchy={"primary"} disabled={false} />
    </StyledNewWorkerForm>
  );
});
