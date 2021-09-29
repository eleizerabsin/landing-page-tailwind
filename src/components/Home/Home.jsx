import React from "react";
import {
  SectionTypeOne,
  SectionTypeTwo,
  SectionTypeThree,
  SectionTypeFour,
} from "../Section/Section";
import {
  email,
  intro,
  about1,
  about2,
  about3,
  iconGrid,
  skillsAbout,
  contact,
} from "../../data/data";

const Home = () => {
  return (
    <>
      <SectionTypeOne datacol1={intro} email={email} />
      <SectionTypeTwo datacol1={about1} datacol2={about2} />
      <SectionTypeFour
        datacol1={skillsAbout}
        iconGrid={iconGrid}
        iconGridHeader={skillsAbout.iconGridHeader}
      />
      <SectionTypeOne datacol1={contact} datacol2={contact} email={email} />
    </>
  );
};

export default Home;
