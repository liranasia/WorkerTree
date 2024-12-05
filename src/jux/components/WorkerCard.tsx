import * as React from "react";
import { styled, css } from "@juxio/react-styled";
import { NewWorkerForm } from "./NewWorkerForm";

// WorkerCard Props
interface WorkerCardProps extends React.ComponentPropsWithoutRef<"div"> {}

const text_23e5f503 = css({
  color: "#000000",
  width: "auto",
  height: "auto",
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "130%",
  display: "inline-block",
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",
  _name: "text_23e5f503",
});

const email_cdf34673 = css({
  color: "#000000",
  width: "auto",
  height: "auto",
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "130%",
  display: "inline-block",
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",
  _name: "email_cdf34673",
});

const paycheck_cdf34623 = css({
  color: "#000000",
  width: "auto",
  height: "auto",
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "130%",
  display: "inline-block",
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",
  _name: "paycheck_cdf34673",
});

const StyledWorkerCard = styled<"div", WorkerCardProps>("div", {
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

export const WorkerCard = React.forwardRef<HTMLDivElement, WorkerCardProps>(
  function WorkerCard({ ...otherProps }, ref) {
    return (
      <StyledWorkerCard ref={ref} {...otherProps}>
        <span className={text_23e5f503}>Worker Name - Role</span>
        <span className={email_cdf34673}>Worker email</span>
        <span className={paycheck_cdf34623}>Worker paycheck</span>
        <NewWorkerForm />
      </StyledWorkerCard>
    );
  },
);
