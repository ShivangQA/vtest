import React from "react";

import { Img, SelectBox, Text } from "components";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[30px] w-[90px]"
              src="images/img_settings.svg"
              alt="settings"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full common-row-list">
            <li>
              <SelectBox
                className="font-rubik leading-[normal] text-black-900 text-left text-lg tracking-[-0.50px]"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frameFour"
                options={homeOptionsList}
                isSearchable={false}
                placeholder="Home"
              />
            </li>
            <li>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Black900"
              >
                Shop
              </Text>
            </li>
            <li>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Black900"
              >
                Blog
              </Text>
            </li>
            <li>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Black900"
              >
                About
              </Text>
            </li>
            <li>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Black900"
              >
                Contact
              </Text>
            </li>
            <li>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Black900"
              >
                Team
              </Text>
            </li>
          </ul>
          <Img
            className="h-6 sm:hidden w-[132px]"
            src="images/img_icon.svg"
            alt="icon"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
