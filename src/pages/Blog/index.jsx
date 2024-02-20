import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[126px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                  size="txtRalewayRegular40"
                >
                  Read Our Latest Blog
                </Text>
                <Text
                  className="leading-[35.00px] text-center text-gray-500 text-lg tracking-[-0.50px]"
                  size="txtRubikRegular18"
                >
                  <>
                    We write various things related to furniture, from tips and
                    what things <br />I need to pay attention to when choosing
                    furniture
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_400x417.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_1.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_2.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_3.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_4.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_5.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_6.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Img
                        className="h-[400px] md:h-auto object-cover w-full"
                        src="images/img_rectangle18_7.png"
                        alt="rectangleEighteen"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                          size="txtRalewayRegular24"
                        >
                          Why should you choose good wood
                        </Text>
                        <div className="flex flex-col font-rubik items-center justify-start w-full">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-[417px] sm:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxeditalt1.svg"
                                alt="bxeditaltOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Line className="bg-gray-500 h-[15px] w-px" />
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_bxcalendar1.svg"
                                alt="bxcalendarOne"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[-0.50px] w-auto"
                                size="txtRubikRegular14"
                              >
                                December 10, 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="leading-[35.00px] max-w-[417px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                          size="txtRubikRegular14Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever.
                          </>
                        </Text>
                        <Button
                          className="cursor-pointer font-rubik leading-[normal] min-w-[139px] text-center text-lg tracking-[-0.50px]"
                          shape="square"
                          color="black_900"
                          size="sm"
                          variant="outline"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center w-full">
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <div className="flex flex-row gap-7 items-center justify-center w-[3%]">
                <Text
                  className="text-center text-sm text-white-A700 tracking-[-0.50px]"
                  size="txtRubikRegular14WhiteA700"
                >
                  1
                </Text>
                <Line className="bg-blue_gray-900_01 h-[35px] rounded-[1px] w-[3px]" />
              </div>
              <div className="flex flex-row gap-[26px] items-center justify-center w-[4%]">
                <Text
                  className="text-black-900 text-center text-sm tracking-[-0.50px]"
                  size="txtRubikRegular14"
                >
                  2
                </Text>
                <Line className="bg-gray-100 h-[35px] rounded-[1px] w-[3px]" />
              </div>
              <div className="flex flex-row gap-[26px] items-center justify-center w-[4%]">
                <Text
                  className="text-black-900 text-center text-sm tracking-[-0.50px]"
                  size="txtRubikRegular14"
                >
                  3
                </Text>
                <Line className="bg-gray-100 h-[35px] rounded-[1px] w-[3px]" />
              </div>
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_number.svg"
                alt="number"
              />
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
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

export default BlogPage;
