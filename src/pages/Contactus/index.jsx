import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactusPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
          <Header1 className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col max-w-[1291px] mx-auto relative w-full">
              <div className="flex flex-1 flex-col items-center justify-start mx-auto w-full">
                <Img
                  className="h-[450px] md:h-auto object-cover w-full"
                  src="images/img_rectangle28_450x1291.png"
                  alt="rectangleTwentyEight"
                />
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start mt-[-136.3px] w-auto z-[1]">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-lg text-yellow-100 tracking-[-0.50px] w-auto"
                    size="txtRubikRegular18Yellow100"
                  >
                    Best Room Decor Items
                  </Text>
                  <Text
                    className="leading-[60.00px] max-w-[465px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]"
                    size="txtRalewayBold36"
                  >
                    Our goods have the best quality and materials in the world
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[170px] text-center text-xl tracking-[-0.50px]"
                  shape="square"
                  color="yellow_100"
                  size="lg"
                  variant="fill"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-11 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px] w-full"
                  size="txtRalewayBold32"
                >
                  Frequently asked questions
                </Text>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-[30px] w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start w-full">
                                    <Text
                                      className="flex-1 text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                      size="txtRalewayRegular24"
                                    >
                                      How can I make refund from your website?
                                    </Text>
                                    {expanded && (
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_iconplus.svg"
                                        alt="iconplus_One"
                                      />
                                    )}
                                    {!expanded && (
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_iconplus.svg"
                                        alt="iconplus"
                                      />
                                    )}
                                  </div>
                                  {expanded && (
                                    <Line className="bg-black-900_19 h-px w-full" />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full ">
                          <div className="flex flex-col gap-[30px] items-start justify-start mx-auto w-full">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                              <div className="flex flex-row font-raleway sm:gap-10 items-start justify-between w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-auto"
                                  size="txtRalewayRegular24Bluegray90001"
                                >
                                  How to buy a product?
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_iconminus.svg"
                                  alt="iconminus"
                                />
                              </div>
                              <Text
                                className="leading-[35.00px] max-w-[610px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                                size="txtRubikRegular14Gray500"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id a enim, consectetur cursus.
                                At mattis nulla in pretium. Condimentum sagittis
                                mauris augue maecenas fusce commodo neque purus
                                et. Integer eu amet at pretium id ultrices
                                faucibus. In vestibulum pretium, potenti
                                molestie.
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-px w-full" />
                          </div>
                        </AccordionItemPanel>
                      </div>
                      <Line className="self-center h-px bg-black-900_19 w-full" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
              >
                <Text size="txtRalewayRegular24">Contact Us</Text>
              </a>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold18"
                      >
                        Your Name
                      </Text>
                      <Text
                        className="border border-blue_gray-100 border-solid pl-[18px] sm:pr-5 pr-[35px] py-5 text-gray-500 text-sm tracking-[-0.50px] w-full"
                        size="txtRubikRegular14Gray500"
                      >
                        Write your name here....
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold18"
                      >
                        Your Email
                      </Text>
                      <Text
                        className="border border-blue_gray-100 border-solid pl-[18px] sm:pr-5 pr-[35px] py-5 text-gray-500 text-sm tracking-[-0.50px] w-full"
                        size="txtRubikRegular14Gray500"
                      >
                        Write your email here....
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRalewaySemiBold18"
                    >
                      Your Comment
                    </Text>
                    <div className="border border-blue_gray-100 border-solid flex flex-col font-rubik h-[218px] md:h-auto items-start justify-start p-4 w-full">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14Gray500"
                      >
                        Write your review here....
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-start justify-start w-full">
                  <Button
                    className="border-2 border-blue_gray-900_01 border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] text-base text-center tracking-[-0.50px]"
                    shape="square"
                    color="blue_gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="bg-gradient  flex flex-col items-start justify-start max-w-[1291px] mx-auto pl-[59px] md:px-5 py-[46px] w-full">
            <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="leading-[60.00px] max-w-[594px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-50_01 tracking-[-0.50px]"
                    size="txtRalewayBold40"
                  >
                    Subscribe now and get 10% off all items
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[594px] md:max-w-full text-base text-gray-50_01 tracking-[-0.50px]"
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
                src="images/img_pexelsphotoby_309x594.png"
                alt="pexelsphotoby"
              />
            </div>
          </div>
        </div>
        <Footer1 className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ContactusPage;
