import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="bg-orange-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-20 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRubikRegular20Black900"
                  >
                    Interior Needs
                  </Text>
                  <Text
                    className="leading-[60.00px] max-w-[615px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayBold40Black900"
                  >
                    <span className="text-black-900 font-raleway text-left font-bold">
                      Various{" "}
                    </span>
                    <span className="text-blue_gray-900_01 font-raleway text-left font-bold">
                      new collections
                    </span>
                    <span className="text-black-900 font-raleway text-left font-bold">
                      {" "}
                      of furniture to decorate the corner of your house.
                    </span>
                  </Text>
                </div>
                <Button
                  className="!text-yellow-100 border-2 border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[218px] text-center text-xl tracking-[-0.50px]"
                  shape="square"
                  color="blue_gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Shop Now
                </Button>
              </div>
              <Img
                className="flex-1 md:flex-none h-[566px] sm:h-auto max-h-[566px] object-cover sm:w-[] md:w-[]"
                src="images/img_nathanoakleyo.png"
                alt="nathanoakleyo"
              />
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[173px] py-[41px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-auto w-full">
            <Text
              className="text-center text-gray-50_01 text-xl tracking-[-0.50px] w-full"
              size="txtRubikRegular20"
            >
              Various brands have used our products
            </Text>
            <Img
              className="h-12 w-full"
              src="images/img_partner.svg"
              alt="partner"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-gray-50_01 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray5001"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="md:max-w-full max-w-xs text-4xl sm:text-[32px] md:text-[34px] text-gray-50_01 tracking-[-0.50px]"
                      size="txtRalewayRegular36"
                    >
                      The best foam padded chair
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[155px] text-base text-center tracking-[-0.50px]"
                    shape="square"
                    color="gray_50"
                    size="lg"
                    variant="outline"
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                  src="images/img_sammoghadamkh.png"
                  alt="sammoghadamkh"
                />
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-center justify-center sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] h-[301px] md:h-auto items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-gray-50_01 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray5001"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="max-w-[306px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-50_01 tracking-[-0.50px]"
                      size="txtRalewayRegular36"
                    >
                      Latest model chandelier
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[155px] text-base text-center tracking-[-0.50px]"
                    shape="square"
                    color="gray_50"
                    size="lg"
                    variant="outline"
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[244px] md:h-auto max-h-[244px] object-cover sm:w-[]"
                  src="images/img_phildesforges.png"
                  alt="phildesforges"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayRegular40"
              >
                Our Newest Product
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18"
              >
                Made of the best materials and with a design that follows the
                times
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <List
                    className="flex flex-col gap-[47px] items-center mx-2.5"
                    orientation="vertical"
                  >
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image.png"
                            alt="image"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col md:gap-10 gap-[106px] items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                            <Img
                              className="h-[140px] w-10"
                              src="images/img_action.svg"
                              alt="action"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_400x160.png"
                            alt="image_One"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_1.png"
                            alt="image_Two"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_2.png"
                            alt="image_Three"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_3.png"
                            alt="image"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_4.png"
                            alt="image_One"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_5.png"
                            alt="image_Two"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                            src="images/img_image_6.png"
                            alt="image_Three"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                            shape="square"
                            color="blue_gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                              size="txtRubikRegular14WhiteA700"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                            size="txtRalewayRegular20Black900"
                          >
                            Teak wood chair
                          </Text>
                          <Text
                            className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                            size="txtRubikRegular18Bluegray90001"
                          >
                            $24
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-blue_gray-900_01 w-[15px]" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-center justify-center max-w-[1289px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-blue_gray-900_01 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="h-[535px] md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1365px] mb-[-70.42px] ml-auto mt-auto w-full z-[1]">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl tracking-[-0.50px] w-full"
                  size="txtRubikRegular24"
                >
                  Interior Modern
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                  size="txtRalewayBold40Black900"
                >
                  Arrange your home in such a way with our modern interiors
                </Text>
              </div>
              <Button
                className="cursor-pointer leading-[normal] min-w-[218px] text-center text-xl tracking-[-0.50px]"
                shape="square"
                color="blue_gray_900_01"
                size="lg"
                variant="outline"
              >
                Shop Now
              </Button>
            </div>
            <Img
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              src="images/img_insideweather.png"
              alt="insideweather"
            />
          </div>
          <div className="bg-yellow-100 h-[70px] mt-auto mx-auto w-full"></div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01 text-center tracking-[-0.50px] w-full"
              size="txtRalewayBold32Bluegray90001"
            >
              New Arrival
            </Text>
            <div className="flex flex-col font-rubik items-start justify-start w-full">
              <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col md:gap-10 gap-[106px] items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                      <Img
                        className="h-[140px] w-10"
                        src="images/img_action.svg"
                        alt="action"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_7.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_8.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_9.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_10.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_11.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_12.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                      src="images/img_image_13.png"
                      alt="image"
                    />
                    <Button
                      className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[106px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Living Room
                    </Button>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14WhiteA700"
                      >
                        New
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRegular20Black900"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-blue_gray-900_01 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18Bluegray90001"
                    >
                      $24
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[50px] h-full items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[602px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                size="txtRalewayBold40Black900"
              >
                We guarantee the safety of your shopping
              </Text>
              <List
                className="flex flex-col gap-[50px] items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[46%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[63px]">
                      <div className="bg-gray-50_01 h-[60px] rounded-[50%] w-[60px]"></div>
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_bxrocket1.svg"
                        alt="bxrocketOne"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRegular20Black900"
                      >
                        Fast Shipping
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14Gray500"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[46%] md:w-full">
                    <Img
                      className="h-[90px] w-[46px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[73px] w-[202px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRegular20Black900"
                      >
                        Safe Delivery
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[202px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14Gray500"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[46%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[63px]">
                      <div className="bg-gray-50_01 h-[60px] rounded-[50%] w-[60px]"></div>
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRegular20Black900"
                      >
                        365 Days Return
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14Gray500"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[46%] md:w-full">
                    <Img
                      className="h-[90px] w-[46px]"
                      src="images/img_contrast_gray_50_01.svg"
                      alt="contrast"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[73px] w-[202px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRegular20Black900"
                      >
                        24 hours CS
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[202px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14Gray500"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Img
              className="flex-1 md:flex-none md:h-[690px] sm:h-auto h-full max-h-[690px] object-cover sm:w-[] md:w-[]"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayRegular40"
              >
                Read Our Latest Blog
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col h-[681px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover w-full"
                    src="images/img_rectangle18_400x416.png"
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
                      <div className="flex flex-row gap-[17px] items-center justify-start w-full sm:w-full">
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
                      className="leading-[35.00px] max-w-[416px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
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
                    src="images/img_rectangle18_8.png"
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
                      <div className="flex flex-row gap-[17px] items-center justify-start w-full sm:w-full">
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
                      className="leading-[35.00px] max-w-[416px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
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
                    src="images/img_rectangle18_9.png"
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
                      <div className="flex flex-row gap-[17px] items-center justify-start w-full sm:w-full">
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
                      className="leading-[35.00px] max-w-[416px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
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
                    size="txtRalewayRegular40Gray5001"
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

export default HomepagePage;
