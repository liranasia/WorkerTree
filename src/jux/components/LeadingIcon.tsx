import * as React from "react";

export const LeadingIcon = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement>
>(function LeadingIcon({ className, ...otherProps }, ref) {
  return (
    <svg
      width={"16"}
      height={"16"}
      viewBox={"0 0 16 16"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={className}
      ref={ref}
      {...otherProps}
    >
      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4ZM4 3.5H12C12.2761 3.5 12.5 3.72386 12.5 4V10.9393L7 5.43934L3.5 8.93932V4C3.5 3.72386 3.72386 3.5 4 3.5ZM3.5 11.059V12C3.5 12.2761 3.72386 12.5 4 12.5H11.9394L7 7.56066L3.5303 11.0303C3.5204 11.0402 3.5103 11.0498 3.5 11.059Z"
        }
        fill={"currentColor"}
      />
    </svg>
  );
});
