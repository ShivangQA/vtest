import React from "react";

import { Button, Img, Text } from "components";

const Cdscscsdc = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[450px] md:h-auto items-center justify-start w-full">
          <Img
            className="md:h-[400px] sm:h-auto h-full object-cover w-full"
            src="images/img_rectangle1487.png"
            alt="rectangle1487"
          />
          <div className="flex flex-row gap-[25px] items-start justify-start w-auto">
            <Button
              className="flex h-[50px] items-center justify-center w-[50px]"
              shape="circle"
              color="yellow_100"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_bxllinkedin1.svg"
                alt="bxllinkedinOne"
              />
            </Button>
            <div className="flex flex-row gap-[23px] h-[50px] items-center justify-center w-[50px]">
              <Img
                className="h-6"
                src="images/img_bxlfacebook1.svg"
                alt="bxlfacebookOne"
              />
              <div className="bg-gray-50_01 h-[50px] rounded-[25px] w-[36%]"></div>
            </div>
            <div className="flex flex-row gap-[34px] h-[50px] items-center justify-between w-[50px]">
              <Img
                className="h-6"
                src="images/img_bxltwitter1.svg"
                alt="bxltwitterOne"
              />
              <div className="bg-gray-50_01 h-[50px] rounded-[25px] w-1/5"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.50px] w-full"
            size="txtRalewayBold32"
          >
            Make Jhane
          </Text>
          <Text
            className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
            size="txtRubikRegular18"
          >
            Finance Manager
          </Text>
        </div>
      </div>
    </>
  );
};

Cdscscsdc.defaultProps = {};

export default Cdscscsdc;
