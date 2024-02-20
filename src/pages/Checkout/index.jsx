import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const unitedStatesUsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayRegular40"
            >
              Checkout
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-start justify-center w-full">
              <div className="flex flex-1 flex-col gap-[53px] items-start justify-start w-full">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                    size="txtRalewayRegular24"
                  >
                    Contact Information
                  </Text>
                  <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular20Black900"
                        >
                          First Name
                        </Text>
                        <Text
                          className="border border-blue_gray-100 border-solid pl-[22px] pr-[35px] sm:px-5 py-[18px] text-gray-500 text-sm tracking-[-0.50px] w-full"
                          size="txtRubikRegular14Gray500"
                        >
                          Your first name here..
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular20Black900"
                        >
                          Last Name
                        </Text>
                        <Text
                          className="border border-blue_gray-100 border-solid pl-[22px] pr-[35px] sm:px-5 py-[18px] text-gray-500 text-sm tracking-[-0.50px] w-full"
                          size="txtRubikRegular14Gray500"
                        >
                          Your last name here..
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular20Black900"
                        >
                          Phone
                        </Text>
                        <Input
                          name="frame48096053"
                          placeholder="Your phone here.."
                          className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                          wrapClassName="w-full"
                          type="number"
                          color="blue_gray_100"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular20Black900"
                        >
                          Email
                        </Text>
                        <Input
                          name="frame48096054"
                          placeholder="Your email here.."
                          className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                          wrapClassName="w-full"
                          type="email"
                          color="blue_gray_100"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-9 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayRegular24"
                    >
                      Shipping Method
                    </Text>
                    <div className="flex flex-row font-rubik gap-[21px] items-start justify-start w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[154px]"
                        leftIcon={
                          <div className="h-10 mr-2.5 w-10 bg-gray-200_01 p-2 rounded-[50%] flex justify-center items-center">
                            <Img
                              className="h-6"
                              src="images/img_bxstore_1.svg"
                              alt="bx-store 1"
                            />
                          </div>
                        }
                        shape="square"
                        color="blue_gray_100"
                        size="lg"
                        variant="outline"
                      >
                        <div className="leading-[normal] text-left text-lg tracking-[-0.50px]">
                          Store
                        </div>
                      </Button>
                      <Button
                        className="border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[175px]"
                        leftIcon={
                          <div className="h-10 mr-2.5 w-10 bg-blue_gray-900_01 p-2 rounded-[50%] flex justify-center items-center">
                            <Img
                              className="h-6"
                              src="images/img_bxpackage_1.svg"
                              alt="bx-package 1"
                            />
                          </div>
                        }
                        shape="square"
                        color="gray_100"
                        size="lg"
                        variant="fill"
                      >
                        <div className="leading-[normal] text-left text-lg tracking-[-0.50px]">
                          Delivery
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayRegular20Black900"
                    >
                      Country / Region{" "}
                    </Text>
                    <SelectBox
                      className="font-rubik leading-[normal] text-left text-sm tracking-[-0.50px] w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame48096062"
                      options={unitedStatesUsOptionsList}
                      isSearchable={false}
                      placeholder="United States (US)"
                      shape="square"
                      color="blue_gray_100"
                      size="sm"
                      variant="outline"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayRegular20Black900"
                    >
                      Street address{" "}
                    </Text>
                    <div className="border border-blue_gray-100 border-solid flex flex-col font-rubik h-[150px] md:h-auto items-start justify-start sm:px-5 px-[22px] py-[19px] w-full">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14Gray500"
                      >
                        Write your full address
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                    size="txtRalewayRegular24"
                  >
                    Payment Method
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                    <div className="border border-blue_gray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                      <Img
                        className="h-[19px] md:h-auto object-cover w-[60px] sm:w-full"
                        src="images/img_visa.png"
                        alt="visa"
                      />
                    </div>
                    <div className="border border-blue_gray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                      <Img
                        className="h-[23px] w-[60px]"
                        src="images/img_googlepay.svg"
                        alt="googlepay"
                      />
                    </div>
                    <div className="border border-blue_gray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                      <Img
                        className="h-[19px] w-20"
                        src="images/img_paypal.svg"
                        alt="paypal"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50_01 flex sm:flex-1 flex-col items-start justify-start sm:px-5 px-[27px] py-[34px] w-[416px] sm:w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRalewayBold20"
                  >
                    Your Order
                  </Text>
                  <div className="flex flex-col font-rubik gap-[25px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRegular20"
                        >
                          Complete set of sofa... 1x
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsRegular20Black900"
                        >
                          $ 75.00
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRegular20"
                        >
                          Teak wood chair 1x
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsRegular20Black900"
                        >
                          $ 24.00
                        </Text>
                      </div>
                      <Line className="bg-black-900 h-px w-full" />
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRegular20"
                        >
                          Subtotal
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsRegular20Black900"
                        >
                          $ 99.00
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRegular20"
                        >
                          Discount (30%)
                        </Text>
                        <Text
                          className="text-deep_orange-A400 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsRegular20DeeporangeA400"
                        >
                          - $ 29.70
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-black-900 h-px w-full" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewayRegular20"
                      >
                        Total
                      </Text>
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtPoppinsRegular20Black900"
                      >
                        $ 69.30
                      </Text>
                    </div>
                    <Button
                      className="!text-yellow-100 cursor-pointer leading-[normal] text-center text-lg tracking-[-0.50px] w-full"
                      shape="square"
                      color="blue_gray_900_01"
                      size="md"
                      variant="fill"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

export default CheckoutPage;
