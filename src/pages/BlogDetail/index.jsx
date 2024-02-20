import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogDetailPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col font-raleway gap-4 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                    size="txtRalewayRegular40"
                  >
                    Why should you choose good wood
                  </Text>
                  <div className="flex flex-row font-rubik gap-[18px] items-center justify-center max-w-[1290px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRubikRegular18Black900"
                      >
                        By Admin
                      </Text>
                    </div>
                    <Line className="bg-gray-500 h-[15px] w-px" />
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bxcalendar1.svg"
                        alt="bxcalendarOne"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRubikRegular18Black900"
                      >
                        December 10, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-base text-center text-gray-500 tracking-[-0.50px] w-full"
                  size="txtRubikRegular16Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </>
                </Text>
              </div>
              <Img
                className="h-[450px] md:h-auto object-cover w-full"
                src="images/img_rectangle1488.png"
                alt="rectangle1488"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[110px] items-start justify-between w-full">
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px] w-full"
                      size="txtRalewayBold32"
                    >
                      How to choose the best chair
                    </Text>
                    <Text
                      className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                      size="txtRubikRegular16Gray500"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque, felis fringilla
                      aenean hac eleifend tellus pellentesque quis suspendisse.
                      Sociosqu suscipit sodales taciti rutrum condimentum
                      conubia volutpat cubilia mi, velit curabitur consequat
                      proin neque commodo interdum eleifend dui, ac magna leo
                      ridiculus facilisi duis sapien etiam.
                    </Text>
                    <Text
                      className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                      size="txtRubikRegular16Gray500"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque.
                    </Text>
                  </div>
                  <Img
                    className="h-[500px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle1489.png"
                    alt="rectangle1489"
                  />
                  <Text
                    className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16Gray500"
                  >
                    Massa mus mattis natoque ante sapien venenatis nisl, mauris
                    malesuada parturient fringilla dignissim tortor morbi,
                    imperdiet quam faucibus id nunc cum. Suscipit lectus curae
                    cum in taciti ullamcorper accumsan luctus, euismod ornare
                    fames aenean ultrices odio ultricies et mus, gravida
                    condimentum senectus hendrerit lobortis sociis quam. Blandit
                    placerat cras suscipit egestas arcu nam ligula rhoncus,
                    tortor purus proin nulla faucibus odio molestie semper,
                    venenatis urna mollis libero praesent cum nec.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start w-full">
                    <Img
                      className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[]"
                      src="images/img_rectangle1490.png"
                      alt="rectangle1490"
                    />
                    <Img
                      className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[]"
                      src="images/img_rectangle1491.png"
                      alt="rectangle1491"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-raleway gap-[50px] items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewaySemiBold24"
                    >
                      Tag :
                    </Text>
                    <div className="flex flex-row font-rubik gap-2.5 items-start justify-start w-auto">
                      <Button
                        className="!text-yellow-100 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[62px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        Chair
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[65px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="gray_500"
                        size="xs"
                        variant="outline"
                      >
                        Lamp
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[96px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="gray_500"
                        size="xs"
                        variant="outline"
                      >
                        Minimalist
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayRegular24"
                    >
                      Leave a Comment
                    </Text>
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
                      <div className="flex flex-col font-inter gap-[30px] items-start justify-start w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-sm tracking-[-0.50px]"
                          inputClassName="h-[18px] mr-[5px] w-[18px]"
                          name="savemynameemail_One"
                          id="savemynameemail_One"
                          label="Save my name, email, and website in this browser for the next time I comment."
                        ></CheckBox>
                        <Button
                          className="border-2 border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[155px] text-base text-center tracking-[-0.50px]"
                          shape="square"
                          color="blue_gray_900_01"
                          size="lg"
                          variant="fill"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[50px] items-start justify-start w-[328px]">
                <div className="flex flex-row items-start justify-start w-full">
                  <Input
                    name="frame48096101"
                    placeholder="Find Something..."
                    className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_3f sm:h-auto text-left text-sm tracking-[-0.50px] w-full"
                    wrapClassName="w-[69%]"
                    color="gray_50_01"
                    size="sm"
                  ></Input>
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
                <div className="flex flex-col font-raleway gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtRalewaySemiBold20Gray900"
                  >
                    Recent Post
                  </Text>
                  <List
                    className="flex flex-col gap-5 items-start w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-start justify-center my-0 w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                        <Img
                          className="h-[70px] md:h-auto object-cover w-[70px]"
                          src="images/img_image_70x70.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 w-full"
                            size="txtRalewayBold16"
                          >
                            How to choose a chair at home
                          </Text>
                          <Text
                            className="text-gray-500 text-sm tracking-[-0.50px] w-full"
                            size="txtRubikRegular14Gray500"
                          >
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                        <Img
                          className="h-[70px] md:h-auto object-cover w-[70px]"
                          src="images/img_image_21.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 w-full"
                            size="txtRalewayBold16"
                          >
                            How to choose a chair at home
                          </Text>
                          <Text
                            className="text-gray-500 text-sm tracking-[-0.50px] w-full"
                            size="txtRubikRegular14Gray500"
                          >
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                        <Img
                          className="h-[70px] md:h-auto object-cover w-[70px]"
                          src="images/img_image_22.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 w-full"
                            size="txtRalewayBold16"
                          >
                            How to choose a chair at home
                          </Text>
                          <Text
                            className="text-gray-500 text-sm tracking-[-0.50px] w-full"
                            size="txtRubikRegular14Gray500"
                          >
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                        <Img
                          className="h-[70px] md:h-auto object-cover w-[70px]"
                          src="images/img_image_23.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 w-full"
                            size="txtRalewayBold16"
                          >
                            How to choose a chair at home
                          </Text>
                          <Text
                            className="text-gray-500 text-sm tracking-[-0.50px] w-full"
                            size="txtRubikRegular14Gray500"
                          >
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansSemiBold20"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row gap-5 items-start justify-start w-full">
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
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansSemiBold20"
                  >
                    Our Gallery
                  </Text>
                  <List
                    className="flex flex-col gap-[18px] items-start w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-3.5 items-start justify-start my-0 w-full">
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_rectangle21.png"
                        alt="rectangleTwentyOne"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_100x100.png"
                        alt="image_One"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_24.png"
                        alt="image_Two"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-3.5 items-start justify-start my-0 w-full">
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_25.png"
                        alt="image"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_26.png"
                        alt="image_One"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_27.png"
                        alt="image_Two"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansSemiBold20"
                  >
                    Tags
                  </Text>
                  <div className="flex flex-col font-inter gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                      <Button
                        className="!text-yellow-100 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[62px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        Chair
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[65px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="gray_500"
                        size="xs"
                        variant="outline"
                      >
                        Lamp
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[96px] text-base text-center tracking-[-0.50px]"
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
                        className="cursor-pointer leading-[normal] min-w-[57px] text-base text-center tracking-[-0.50px]"
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
                        className="cursor-pointer leading-[normal] min-w-[65px] text-base text-center tracking-[-0.50px]"
                        shape="round"
                        color="gray_500"
                        size="xs"
                        variant="outline"
                      >
                        Clock
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start px-2 w-full">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayRegular40"
              >
                Other blogs
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
            </List>
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

export default BlogDetailPage;
