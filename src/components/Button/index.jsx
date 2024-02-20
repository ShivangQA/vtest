import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
  square: "rounded-none",
};
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    yellow_100: "bg-yellow-100 text-blue_gray-900_01",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
  },
  outline: {
    gray_50: "border-2 border-gray-50 border-solid text-gray-50",
    blue_gray_100: "border border-blue_gray-100 border-solid text-gray-500",
    blue_gray_900_01:
      "border-2 border-blue_gray-900_01 border-solid text-blue_gray-900_01",
    gray_500: "border border-gray-500 border-solid text-gray-500",
    black_900: "border border-black-900 border-solid text-black-900",
  },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900",
    "blue_gray_100",
    "gray_100",
    "yellow_100",
    "blue_gray_900_01",
    "gray_50",
    "gray_500",
  ]),
};

export { Button };
