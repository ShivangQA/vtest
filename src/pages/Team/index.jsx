import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import Cdscscsdc from "components/Cdscscsdc";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TeamPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayRegular40"
              >
                Meet Our Team
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
            <div className="gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col h-[548px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
              <div className="flex flex-1 flex-col h-[546px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
              <div className="flex flex-1 flex-col h-[546px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
              <div className="flex flex-1 flex-col h-[548px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
              <div className="flex flex-1 flex-col h-[546px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
              <div className="flex flex-1 flex-col h-[546px] md:h-auto items-start justify-start w-full">
                <Cdscscsdc className="flex flex-col gap-[30px] items-center justify-start w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
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

export default TeamPage;
