import React, { useContext, useState } from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { getUserAttr, signOut } from "@bit/wasedatime.core.ts.utils.user";
import { WithTranslation, withTranslation } from "react-i18next";
import styled from "styled-components";

import {
  ProfileIcon,
  ProfileIconHovered,
} from "@app/components/icons/ProfileIcon";
import { ThemeContext } from "@app/utils/theme-context";

type SignInSpanProps = {
  ishovered: boolean;
};

const UserMenuTrigger = styled("div")`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5vh 0.5em 1em 0.7em;
  ${media.tablet`padding: 0.5em;`}

  svg {
    width: 40px !important;
    height: 40px;
    text-align: center;
  }

  i {
    margin: 0 !important;
    font-size: 2em !important;
    width: 40px;
    min-width: 40px;
  }

  img.ui.circular.image {
    width: 40px;
    min-width: 40px;
    ${media.phone`width: 35px; min-width: 35px;`}
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled("span")<SignInSpanProps>`
  text-align: left;
  font-weight: 100;
  margin-left: 1em;
  opacity: ${(props) => (props.ishovered ? "1" : "0")};
  width: ${(props) => (props.ishovered ? "145px" : "0px")};
  white-space: nowrap;
  overflow-x: hidden;
  transition: ${(props) =>
    props.ishovered
      ? "width 0.5s ease, opacity 0.5s ease 0.1s"
      : "width 0.5s, opacity 0.2s"};
`;

interface Props extends WithTranslation {
  openSignInModal: () => void;
  isHovered: boolean;
  isMobileMode: boolean;
}

const UserMenu = ({ openSignInModal, isHovered, isMobileMode, t }: Props) => {
  const { theme } = useContext(ThemeContext);
  const [userAttr, setUserAttr] = useState(null);
  const [isUserIconHovered, setIsUserIconHovered] = useState(false);
  const notSignedIn = !userAttr;
  if (notSignedIn) getUserAttr().then((attr) => setUserAttr(attr));

  return notSignedIn ? (
    <UserMenuTrigger
      className="group text-light-text2 dark:text-dark-text2"
      onClick={openSignInModal}
    >
      <div className="text-light-text2 dark:text-dark-text2 group-hover:text-light-main dark:group-hover:text-dark-text1">
        {theme === "dark" ? <ProfileIconHovered /> : <ProfileIcon />}
      </div>
      {!isMobileMode && (
        <StyledSpan
          className="text-light-text2 dark:text-dark-text2 group-hover:text-light-main dark:group-hover:text-dark-text1"
          ishovered={isHovered}
        >
          {t("user.Sign in")}
        </StyledSpan>
      )}
    </UserMenuTrigger>
  ) : (
    <div
      className="relative inline-block text-left group"
      onMouseEnter={() => setIsUserIconHovered(true)}
      onTouchStart={() => setIsUserIconHovered(true)}
      onMouseLeave={() => setIsUserIconHovered(false)}
    >
      <button
        type="button"
        className="inline-flex w-full rounded-md shadow-sm bg-blank text-white focus:outline-none"
        style={{ padding: "10px" }}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <img
          src={userAttr.picture}
          width="40"
          height="40"
          className="rounded-full"
          alt="User account"
          style={{ marginLeft: "2px" }}
        />
        <StyledSpan
          className="text-light-text2 dark:text-dark-text2 group-hover:text-light-main dark:group-hover:text-dark-text1"
          style={{ paddingTop: "8px" }}
          ishovered={isHovered}
        >
          {userAttr.name}
        </StyledSpan>
      </button>

      <div
        className={`transition-opacity ${
          isUserIconHovered
            ? "duration-500 delay-100 opacity-100"
            : "duration-300 opacity-0"
        } w-full origin-top-left absolute right-0 m-0 rounded-md shadow-lg text-white`}
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-white hover:text-gray-500 bg-gray-500 hover:bg-gray-300"
            role="menuitem"
            onClick={signOut}
          >
            <p>{t("user.Sign Out")}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default withTranslation("translation")(UserMenu);
