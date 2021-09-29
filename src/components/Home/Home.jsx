import React from "react";
import {
  SectionTypeOne,
  SectionTypeTwo,
  SectionTypeThree,
  SectionTypeFour,
} from "../Section/Section";
import { intro, about1, about2, about3, iconGrid } from "../../data/data";

const Home = () => {
  return (
    <>
      <SectionTypeOne datacol1={intro} datacol2={about2} />
      <SectionTypeTwo datacol1={about1} datacol2={about2} />
      <SectionTypeThree datacol1={about3} datacol2={about2} />
      <SectionTypeFour
        datacol1={about1}
        datacol2={about2}
        iconGrid={iconGrid}
      />
    </>
  );
};

export default Home;
