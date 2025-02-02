import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";
import Tab from "semantic-ui-react/dist/commonjs/modules/Tab";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import styled from "styled-components";

import SchoolImportCard from "@app/components/syllabus/SchoolImportCard";
import * as schoolIconEnMap from "@app/constants/school-name-icon-map-en";
import * as schoolIconJaMap from "@app/constants/school-name-icon-map-ja";

import "semantic-ui-css/components/popup.min.css";
import { ThemeContext } from "@app/utils/theme-context";

type ThemeComponentProps = {
  isDark: boolean;
};

const Cards = styled(Card.Group)`
  .ui.card > .ui.image {
    width: 60px !important;
    img {
      width: 60px;
    }
  }
  .ui.card > .ui.dimmer {
    width: 60px !important;
    .content {
      width: 60px !important;
    }
  }
`;

const WiderPopup = styled(Popup)<ThemeComponentProps>`
  ${(props) =>
    props.isDark &&
    `
    background-color: ${colors.dark.bgMain} !important;
    box-shadow: 0 2px 4px 0 ${colors.dark.text3} !important;
    border-color: ${colors.dark.text3} !important;
    &:before {
      background-color: ${colors.dark.bgMain} !important;
      border-color: ${colors.dark.text3} !important;
      box-shadow: -1px -1px 0 0 ${colors.dark.text3} !important;
    }
  `}

  ${media.tablet`
    max-width: 100vw !important;
    & > div {
      width: 80vw;
    }
  `}
`;

const StyledTab = styled(Tab)<ThemeComponentProps>`
  ${(props) =>
    props.isDark &&
    `
      .tabular.menu {
        border-bottom-color: ${colors.dark.text3} !important;
        .item {
          background-color: ${colors.dark.bgMain} !important;
          border-width: 0px !important;
          color: ${colors.dark.text2} !important;
        }
        .item.active {
          border-width: 1px !important;
          border-color: ${colors.dark.text3} !important;
        }
      }
    `
  }
`;

const StyledMenuItem = styled(Menu.Item)<ThemeComponentProps>`
  font-size: 1.2em;
  ${(props) =>
    props.isDark &&
    `
    background-color: ${colors.dark.bgMain} !important;
    border-color: ${colors.dark.text3} !important;
    color: ${colors.dark.text2} !important;
  `}
`;

const ChooseSchoolButton = styled("button")`
  width: 100%;
  font-size: 14px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background: #b51e36;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer !important;
  ${media.phoneMini`font-size: 11px;`} i {
    color: #48af37;
  }
  &:hover {
    background: #b51e36;
    color: #fff;
    i {
      color: #fff;
    }
  }
  &:focus {
    outline: 0;
  }
`;

interface Props extends WithTranslation {
  loadedSchools: string[];
  selectedSchools: string[];
  handleToggleFilter: (school: string) => void;
  loadSyllabus: (school: string) => void;
  removeSyllabus: (school: string) => void;
  isPopup: boolean;
}

interface State {
  open: boolean;
  loadedSchools: string[];
  loadingSchool: string | null;
  removingSchool: string | null;
}

class SchoolFilterForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      loadedSchools: props.loadedSchools,
      loadingSchool: null,
      removingSchool: null,
    };
  }

  static contextType = ThemeContext;

  componentDidMount() {
    const { loadedSchools, selectedSchools, handleToggleFilter } = this.props;
    if (loadedSchools.length === 1 && selectedSchools.length === 0)
      handleToggleFilter(loadedSchools[0]);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loadedSchools !== this.props.loadedSchools) {
      this.setState({ loadedSchools: this.props.loadedSchools });
    }
  }

  schoolImportPanes = (theme) => {
    const { loadedSchools, loadingSchool } = this.state;
    const { t, i18n, selectedSchools, handleToggleFilter } = this.props;
    const schoolGroupNames = ["Undergraduate", "Graduate", "Special"];

    const ImportCardGroup = ({ schoolNameIconMap, itemsPerRow }) => (
      <Cards itemsPerRow={itemsPerRow} style={{ marginTop: "0.5em" }}>
        {Object.keys(schoolNameIconMap).map((schoolName) => (
          <SchoolImportCard
            key={schoolName}
            loaded={loadedSchools.includes(schoolName)}
            loading={loadingSchool === schoolName}
            schoolIcon={schoolNameIconMap[schoolName]}
            onDownload={() => this.handleSchoolloading(schoolName)}
            isBannedToLoad={
              !loadedSchools.includes(schoolName) &&
              loadingSchool &&
              loadingSchool !== schoolName
            }
            checked={selectedSchools.includes(schoolName)}
            onCheck={() => handleToggleFilter(schoolName)}
          />
        ))}
      </Cards>
    );

    const lng = i18n.language;
    const schoolIconMap =
      i18n.language === Lang.EN
        ? [
            schoolIconEnMap.undergradSchoolNameIconMap,
            schoolIconEnMap.gradSchoolNameIconMap,
            schoolIconEnMap.otherSchoolNameIconMap,
          ]
        : [
            schoolIconJaMap.undergradSchoolNameIconMap,
            schoolIconJaMap.gradSchoolNameIconMap,
            schoolIconJaMap.otherSchoolNameIconMap,
          ];

    return schoolIconMap.map((schoolNameIconMap, i) => ({
      menuItem: (
        <StyledMenuItem key={schoolGroupNames[i]} isDark={theme === "dark"}>
          {t(`syllabus.School Filter.${schoolGroupNames[i]}`)}
        </StyledMenuItem>
      ),
      render: () => (
        <MediaQuery minWidth={sizes.tablet}>
          {(matches) => {
            return matches ? (
              <ImportCardGroup
                key={i}
                schoolNameIconMap={schoolNameIconMap}
                itemsPerRow={6}
              />
            ) : (
              <ImportCardGroup
                key={i}
                schoolNameIconMap={schoolNameIconMap}
                itemsPerRow={4}
              />
            );
          }}
        </MediaQuery>
      ),
    }));
  };

  handleSchoolloading = async (school) => {
    const { selectedSchools, loadSyllabus } = this.props;
    const { loadedSchools } = this.state;
    const newLoadedSchools = [...loadedSchools];

    if (loadedSchools.length >= 10) {
      if (selectedSchools.includes(loadedSchools[0]))
        this.props.handleToggleFilter(loadedSchools[0]);
      newLoadedSchools.splice(0, 1);
    }

    this.setState({ loadingSchool: school });
    newLoadedSchools.push(school);
    await loadSyllabus(school);

    this.setState(
      {
        loadingSchool: null,
        loadedSchools: newLoadedSchools,
      },
      () => this.props.handleToggleFilter(school)
    );
  };

  render() {
    const { theme } = this.context;
    const { t, isPopup } = this.props;

    return isPopup ? (
      <WiderPopup
        id="school_filter_form"
        trigger={
          <ChooseSchoolButton className="bg-light-main dark:bg-dark-main">
            {t("school filter.choose schools")}
          </ChooseSchoolButton>
        }
        content={<StyledTab panes={this.schoolImportPanes(theme)} isDark={theme === "dark"} />}
        on="click"
        position="bottom left"
        size="huge"
        wide="very"
        isDark={theme === "dark"}
      />
    ) : (
      <StyledTab panes={this.schoolImportPanes(theme)} isDark={theme === "dark"} />
    );
  }
}

export default withTranslation("translation")(SchoolFilterForm);
