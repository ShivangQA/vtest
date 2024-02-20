import React from "react";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[149px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 tracking-[-0.50px] w-auto"
                size="txtRalewayBold32Gray5001"
              >
                Furnit.
              </Text>
              <Text
                className="leading-[35.00px] max-w-[360px] md:max-w-full text-base text-gray-50_a3 tracking-[-0.50px]"
                size="txtRubikRegular16Gray50a3"
              >
                Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
                facilisi vivamus proin lit laoreet phasel alilus porttitor
                inter, facilisis condiment tarime egestas rhoncus dapibus
                iaculis alemir.
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-50_01 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewaySemiBold20Gray5001"
              >
                Customer
              </Text>
              <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Order Status
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Collections
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Our Story
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Affiliates
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Security
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-50_01 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewaySemiBold20Gray5001"
              >
                Information
              </Text>
              <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Customer Service
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Careers
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14Gray50a3"
                  >
                    FAQ
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[220px]">
              <Text
                className="text-gray-50_01 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewaySemiBold20Gray5001"
              >
                Follow Us
              </Text>
              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  color="yellow_100"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_bxlinstagram.svg"
                    alt="bxlinstagram"
                  />
                </Button>
                <div className="flex flex-row gap-[17px] h-10 items-center justify-center w-10">
                  <Img
                    className="h-6"
                    src="images/img_bxlfacebook1.svg"
                    alt="bxlfacebook"
                  />
                  <div className="bg-yellow-100 h-10 rounded-[20px] w-[35%]"></div>
                </div>
                <div className="flex flex-row gap-[26px] h-10 items-center justify-center w-10">
                  <Img
                    className="h-6"
                    src="images/img_bxltwitter1.svg"
                    alt="bxltwitter"
                  />
                  <div className="bg-yellow-100 h-10 rounded-[20px] w-1/5"></div>
                </div>
                <Img
                  className="h-10 w-10"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
              size="txtRubikRegular16Gray50a3"
            >
              © Copyright 2022. All Rights Reserved.
            </Text>
            <div className="flex flex-row gap-[41px] items-start justify-start w-[272px]">
              <Text
                className="flex-1 text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
                size="txtRubikRegular16Gray50a3"
              >
                Terms of condition
              </Text>
              <Text
                className="text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
                size="txtRubikRegular16Gray50a3"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
