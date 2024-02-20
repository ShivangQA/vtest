import React from "react";

const sizeClasses = {
  txtRalewaySemiBold20: "font-raleway font-semibold",
  txtRalewayRegular36: "font-normal font-raleway",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtRalewayRegular20Black900: "font-normal font-raleway",
  txtRalewaySemiBold24: "font-raleway font-semibold",
  txtRalewayBold40: "font-bold font-raleway",
  txtRubikRegular14WhiteA700: "font-normal font-rubik",
  txtRubikRegular18Yellow100: "font-normal font-rubik",
  txtRalewayRegular40Gray5001: "font-normal font-raleway",
  txtJosefinSansSemiBold20: "font-josefinsans font-semibold",
  txtRubikRegular18DeeporangeA400: "font-normal font-rubik",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtRalewayBold32Gray5001: "font-bold font-raleway",
  txtRalewayBold32Bluegray90001: "font-bold font-raleway",
  txtRubikRegular18Black900: "font-normal font-rubik",
  txtRalewayBold20WhiteA700: "font-bold font-raleway",
  txtRubikRegular18Gray5001: "font-normal font-rubik",
  txtRalewayRegular40: "font-normal font-raleway",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtRubikRegular16: "font-normal font-rubik",
  txtRubikRegular16Gray50a3: "font-normal font-rubik",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRubikRegular18: "font-normal font-rubik",
  txtRalewayBold48: "font-bold font-raleway",
  txtRubikRegular12: "font-normal font-rubik",
  txtRubikRegular14: "font-normal font-rubik",
  txtPlusJakartaSansSemiBold14: "font-plusjakartasans font-semibold",
  txtJosefinSansBold24: "font-bold font-josefinsans",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtRalewaySemiBold18: "font-raleway font-semibold",
  txtRubikRegular14Yellow100: "font-normal font-rubik",
  txtRalewayRegular36Black900: "font-normal font-raleway",
  txtRalewaySemiBold20Gray5001: "font-raleway font-semibold",
  txtJosefinSansBold24Gray500: "font-bold font-josefinsans",
  txtRalewayBold20: "font-bold font-raleway",
  txtRubikRegular12Bluegray400: "font-normal font-rubik",
  txtRalewayBold40Black900: "font-bold font-raleway",
  txtRubikRegular18WhiteA700: "font-normal font-rubik",
  txtRubikRegular24: "font-normal font-rubik",
  txtRalewayBold16: "font-bold font-raleway",
  txtRalewayBold18: "font-bold font-raleway",
  txtRubikRegular20: "font-normal font-rubik",
  txtRubikRegular18Bluegray90001: "font-normal font-rubik",
  txtRubikRegular14Gray50a3: "font-normal font-rubik",
  txtRalewaySemiBold20Gray900: "font-raleway font-semibold",
  txtPoppinsRegular20DeeporangeA400: "font-normal font-poppins",
  txtRalewayRegular20: "font-normal font-raleway",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtRubikRegular14Gray500: "font-normal font-rubik",
  txtRalewayBold32: "font-bold font-raleway",
  txtRalewayRegular24: "font-normal font-raleway",
  txtRalewayRegular24Bluegray90001: "font-normal font-raleway",
  txtRalewayBold36: "font-bold font-raleway",
  txtRubikRegular20Black900: "font-normal font-rubik",
  txtRubikRegular16Gray500: "font-normal font-rubik",
  txtRubikRegular36: "font-normal font-rubik",
  txtPoppinsRegular14Black9007f01: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
