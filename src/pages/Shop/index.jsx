import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col max-w-[1290px] mx-auto relative w-full">
              <div className="flex flex-1 flex-col items-center justify-start mx-auto w-full">
                <Img
                  className="h-[450px] md:h-auto object-cover w-full"
                  src="images/img_rectangle28.png"
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
          <div className="flex md:flex-col flex-row gap-5 h-[1567px] md:h-auto items-start justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-[308px]">
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewaySemiBold20"
                >
                  Filter By Price
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="border border-gray-500_87 border-solid pl-2 sm:pr-5 pr-[35px] py-[7px] rounded text-gray-500 text-lg tracking-[-0.50px] w-auto"
                    size="txtRubikRegular18"
                  >
                    $0
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPlusJakartaSansSemiBold14"
                  >
                    -
                  </Text>
                  <div className="flex flex-row font-rubik items-center justify-center w-[32%]">
                    <Text
                      className="text-gray-500 text-lg tracking-[-0.50px]"
                      size="txtRubikRegular18"
                    >
                      $2000
                    </Text>
                    <div className="border border-gray-500_87 border-solid h-[38px] ml-1 rounded w-[38px]"></div>
                  </div>
                </div>
                <Img
                  className="h-4 w-[233px]"
                  src="images/img_slider.svg"
                  alt="slider"
                />
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewaySemiBold20"
                >
                  Filter By Color
                </Text>
                <Img
                  className="h-10 w-full"
                  src="images/img_frame48095956.svg"
                  alt="frame48095956"
                />
                <Img
                  className="h-10 w-full"
                  src="images/img_frame48095957.svg"
                  alt="frame48095957"
                />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewaySemiBold20"
                >
                  Product Categories
                </Text>
                <div className="flex flex-col font-poppins gap-5 items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-900_01 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16"
                  >
                    Chair (9)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Lamp (10)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Sofa (6)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Clock (5)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Pillow (3)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewaySemiBold20"
                >
                  Product Tag
                </Text>
                <div className="flex flex-col font-poppins gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Button
                      className="!text-yellow-100 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[66px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="blue_gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      Chair
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[68px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="gray_500"
                      size="xs"
                      variant="outline"
                    >
                      Lamp
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[101px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="gray_500"
                      size="xs"
                      variant="outline"
                    >
                      Minimalist
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[59px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="gray_500"
                      size="xs"
                      variant="outline"
                    >
                      Sofa
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[58px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="gray_500"
                      size="xs"
                      variant="outline"
                    >
                      New
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[67px] text-base text-center tracking-[-0.50px]"
                      shape="round"
                      color="gray_500"
                      size="xs"
                      variant="outline"
                    >
                      Clock
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[66px] text-base text-center tracking-[-0.50px]"
                    shape="round"
                    color="gray_500"
                    size="xs"
                    variant="outline"
                  >
                    Pillow
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[308px] md:w-full"
                  src="images/img_rectangle29.png"
                  alt="rectangleTwentyNine"
                />
                <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                  <Text
                    className="leading-[35.00px] max-w-[265px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtRalewayBold20WhiteA700"
                  >
                    Make a purchase now and get 50% discount
                  </Text>
                  <Button
                    className="!text-black-900 border border-solid border-yellow-100 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[107px] text-base text-center tracking-[-0.50px]"
                    shape="round"
                    color="yellow_100"
                    size="sm"
                    variant="fill"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-rubik gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col font-rubik items-start justify-start w-[407px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-3/4 sm:w-full">
                      <Input
                        name="frame48095984"
                        placeholder="Office Chair"
                        className="!placeholder:text-black-900_3f !text-black-900_3f leading-[normal] p-0 text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="w-full"
                        size="xs"
                      ></Input>
                    </div>
                    <Button
                      className="!text-yellow-100 cursor-pointer leading-[normal] min-w-[104px] text-center text-sm tracking-[-0.50px]"
                      shape="square"
                      color="blue_gray_900_01"
                      size="lg"
                      variant="fill"
                    >
                      Search
                    </Button>
                  </div>
                </div>
                <SelectBox
                  className="sm:flex-1 font-medium font-raleway text-black-900 text-left text-sm w-[8%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 w-5"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  isMulti={false}
                  name="sort"
                  options={sortOptionsList}
                  isSearchable={false}
                  placeholder="Sort By"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <Img
                        className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover"
                        src="images/img_image_400x159.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
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
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_14.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_15.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_16.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_17.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_18.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
                        src="images/img_image_19.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
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
                        src="images/img_image_20.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
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
                        src="images/img_image_14.png"
                        alt="image"
                      />
                      <Button
                        className="cursor-pointer leading-[normal] text-center text-sm tracking-[-0.50px] w-[105px]"
                        shape="square"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Living Room
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewaySemiBold20"
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
              <div className="flex flex-row gap-2.5 items-center justify-center max-w-[962px] w-full">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <div className="flex flex-row gap-[27px] items-center justify-center w-[4%]">
                  <Text
                    className="text-center text-sm text-white-A700 tracking-[-0.50px]"
                    size="txtRubikRegular14WhiteA700"
                  >
                    1
                  </Text>
                  <Line className="bg-blue_gray-900_01 h-[35px] rounded-sm w-1" />
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-center w-[5%]">
                  <Text
                    className="text-black-900 text-center text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14"
                  >
                    2
                  </Text>
                  <Line className="bg-gray-100 h-[35px] rounded-sm w-1" />
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-center w-[5%]">
                  <Text
                    className="text-black-900 text-center text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14"
                  >
                    3
                  </Text>
                  <Line className="bg-gray-100 h-[35px] rounded-sm w-1" />
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

export default ShopPage;
