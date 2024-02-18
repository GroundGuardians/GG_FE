import React, { PropsWithChildren } from "react";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="8"
        viewBox="0 0 80 8"
        fill="none"
      >
        <circle cx="8" cy="8" r="8" fill="#264733" />
      </svg>
      {children}
    </button>
  );
};
