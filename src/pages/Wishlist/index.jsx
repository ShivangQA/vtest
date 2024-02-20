import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WishlistPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col font-raleway items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayRegular40"
            >
              Wishlist
            </Text>
            <List
              className="flex flex-col font-rubik gap-[30px] items-start w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[131px] items-center justify-between my-0 w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_settings_gray_50_01.svg"
                  alt="settings"
                />
                <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover w-[120px]"
                    src="images/img_rectangle1480.png"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="leading-[35.00px] max-w-[294px] md:max-w-full text-black-900 text-xl tracking-[-0.50px]"
                      size="txtRalewayBold20"
                    >
                      Complete set of sofa, pillows and bed sheets
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-xl tracking-[-0.50px] w-auto"
                      size="txtPoppinsRegular20"
                    >
                      $ 75.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikRegular18Black900"
                >
                  $ 75.00
                </Text>
                <Text
                  className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikRegular18Bluegray90001"
                >
                  In Stock
                </Text>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[140px] text-center text-lg tracking-[-0.50px]"
                  shape="square"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-between my-0 w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_settings_gray_50_01.svg"
                  alt="settings"
                />
                <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover w-[120px]"
                    src="images/img_rectangle1480_120x120.png"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayBold20"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-xl tracking-[-0.50px] w-auto"
                      size="txtPoppinsRegular20"
                    >
                      $ 24.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikRegular18Black900"
                >
                  $ 24.00
                </Text>
                <Text
                  className="text-deep_orange-A400 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikRegular18DeeporangeA400"
                >
                  Out Stock
                </Text>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[140px] text-center text-lg tracking-[-0.50px]"
                  shape="square"
                  color="blue_gray_100"
                  size="md"
                  variant="fill"
                >
                  Add to Cart
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="bg-gradient  flex flex-col items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full">
            <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="leading-[60.00px] max-w-[593px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-50_01 tracking-[-0.50px]"
                    size="txtRalewayBold40"
                  >
                    Subscribe now and get 10% off all items
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[593px] md:max-w-full text-base text-gray-50_01 tracking-[-0.50px]"
                    size="txtRubikRegular16"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text.
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-px items-start justify-start w-full">
                  <Input
                    name="frame48095972"
                    placeholder="Your email here.."
                    className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-lg tracking-[-0.50px] w-full"
                    wrapClassName="sm:flex-1 w-[74%] sm:w-full"
                    type="email"
                  ></Input>
                  <Button
                    className="!text-yellow-100 cursor-pointer leading-[normal] text-center text-lg tracking-[-0.50px] w-[157px]"
                    shape="square"
                    color="blue_gray_900_01"
                    size="xl"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <Img
                className="flex-1 md:flex-none md:h-[309px] sm:h-auto h-full max-h-[309px] object-cover sm:w-[] md:w-[]"
                src="images/img_pexelsphotoby.png"
                alt="pexelsphotoby"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default WishlistPage;
