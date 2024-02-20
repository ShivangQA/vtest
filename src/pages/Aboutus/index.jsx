import React from "react";

import {
  Button,
  Img,
  Input,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Cdscscsdc from "components/Cdscscsdc";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AboutusPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[138px] items-center justify-between max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <Text
                    className="leading-[60.00px] max-w-[626px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayBold48"
                  >
                    Provide the best quality ingredients for home products
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[626px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16Gray500"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dictumst posuere, lectus dis vehicula augue elementum quam
                    risus. Placerat dictum lobortis lacinia volutpat morbi cum
                    justo commodo est aliquam, facilisi consequat ligula vivamus
                    faucibus
                  </Text>
                </div>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[167px] text-center text-lg tracking-[-0.50px]"
                  shape="square"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  Meet our Team
                </Button>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                  <div className="flex flex-row font-raleway gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-lg tracking-[0.12px] w-auto"
                      size="txtRalewayBold18"
                    >
                      Ratings
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_antdesignstarfilled.svg"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[0.12px] w-auto"
                        size="txtRalewayBold18"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-black-900_7f text-xs tracking-[-0.50px] w-auto"
                    size="txtRubikRegular12"
                  >
                    Trusted by many people from all over the world
                  </Text>
                </div>
                <div className="flex relative w-[230px]">
                  <div className="flex my-auto w-[81%]">
                    <div className="flex my-auto w-[76%]">
                      <div className="flex my-auto w-[68%]">
                        <Img
                          className="h-[50px] my-auto rounded-[50%] w-[50px]"
                          src="images/img_unsplashwnolnjo7ts8.png"
                          alt="unsplashwnolnjo"
                        />
                        <Img
                          className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                          src="images/img_unsplashrtvgs4vgkgm.png"
                          alt="unsplashrtvgs4v"
                        />
                      </div>
                      <Img
                        className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                        src="images/img_unsplashd1upkifd04a.png"
                        alt="unsplashd1upkif"
                      />
                    </div>
                    <Img
                      className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                      src="images/img_unsplashplsf6obtgms.png"
                      alt="unsplashplsf6ob"
                    />
                  </div>
                  <div className="flex flex-row gap-[13px] h-[50px] items-center justify-between ml-[-5px] my-auto w-[50px] z-[1]">
                    <Text
                      className="text-sm text-yellow-100 tracking-[-0.50px]"
                      size="txtRubikRegular14Yellow100"
                    >
                      3K+
                    </Text>
                    <div className="bg-blue_gray-900_01 h-[50px] rounded-[25px] w-[22%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[650px] sm:h-auto max-h-[650px] object-cover rounded-bl-[300px] rounded-tl-[300px] rounded-tr-[300px] sm:w-[] md:w-[]"
              src="images/img_rectangle1492.png"
              alt="rectangle1492"
            />
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[173px] py-[41px] w-full">
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
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayRegular40"
              >
                Meet Our Team
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-5 h-[548px] w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-1 flex-col h-[548px] md:h-auto items-start justify-start mx-2.5">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-full">
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
                    </div>
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
            </div>
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start w-[75px]"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1365px] mb-[-92.24px] ml-auto mt-auto w-full z-[1]">
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
          <div className="bg-yellow-100 h-[92px] mt-auto mx-auto w-full"></div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.12px] w-full"
              size="txtPoppinsSemiBold40"
            >
              <span className="text-black-900 font-raleway font-bold">
                How happy are they with{" "}
              </span>
              <span className="text-black-900 font-raleway font-bold">
                our service
              </span>
            </Text>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(5)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_bxsquotealtleft.svg"
                            alt="bxsquotealtleft"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_56x56.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Dagruel Manulo
                                </Text>
                                <Text
                                  className="text-black-900_7f_01 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f01"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_bxsquotealtleft.svg"
                            alt="bxsquotealtleft"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_1.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Zambi Owel
                                </Text>
                                <Text
                                  className="text-black-900_7f_01 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f01"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_bxsquotealtleft.svg"
                            alt="bxsquotealtleft"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_2.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Mario
                                </Text>
                                <Text
                                  className="text-black-900_7f_01 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f01"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
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
                className="flex gap-2.5 h-[15px] items-center justify-center max-w-[1290px] w-full"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-blue_gray-900_01 w-[15px]"
                activeIndex={sliderState1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                sliderRef={sliderRef1}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
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

export default AboutusPage;
