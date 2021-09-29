import React from "react";
import ImageTwo from "../../images/img2.svg";

export const SectionTypeOne = (props) => {
  return (
    <div className="bg-bggray1 py-10">
      <div className="common-container section-height">
        {/* <div className="flex flex-wrap content-center section-height items-center"> */}
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <ImageOnly {...props.datacol1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeTwo = (props) => {
  return (
    <div className="bg-bggray2 py-10">
      <div className="common-container section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...props.datacol2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeThree = (props) => {
  return (
    <div className="bg-bggray1 py-10">
      <div className="common-container section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <ImageOnly {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...props.datacol2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeFour = (props) => {
  return (
    <div className="bg-bggray2 py-10">
      <div className="common-container section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <OneBlockGridImage iconGrid={props.iconGrid} />
          </div>
        </div>
      </div>
    </div>
  );
};

const OneBlockGridImage = (props) => {
  var iconGrid = props.iconGrid
    ? props.iconGrid.map((icon) => {
        return (
          <div>
            <div className="image-capsule">
              <img alt="test" src={icon.image} />
            </div>
            <div className="my-4 font-semibold text-white">{icon.text}</div>
          </div>
        );
      })
    : "";

  return (
    <div className="text-center">
      <div class="grid grid-cols-3 gap-4 justify-center">{iconGrid}</div>
    </div>
  );
};

const TwoBlockHeaderDesc = (props) => {
  return (
    <div className="w-96 mx-auto">
      {props.smallHeader ? <SmallHeader text={props.smallHeader} /> : ""}
      {props.header ? (
        <HeaderText text={props.header} bigHeader={props.bigHeader} />
      ) : (
        ""
      )}
      {props.description ? (
        <DescText
          text={props.description}
          bigDescription={props.bigDescription}
        />
      ) : (
        ""
      )}
      {props.bigHeader && props.bigDescription ? (
        <div className="mb-20"></div>
      ) : (
        ""
      )}
      {props.link ? <LinkText text={props.link} /> : ""}
      {props.phone ? <SmallHeader text={props.phone} /> : ""}
      {props.email ? <SmallHeader text={props.email} /> : ""}
      {props.button ? <Button text={props.button} /> : ""}
      {props.numberHighlightNo && props.numberHighlightText ? (
        <NumberHighlight
          no={props.numberHighlightNo}
          text={props.numberHighlightText}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const HeaderText = (props) => {
  return props.bigHeader ? (
    <p className="font-semibold my-4 text-6xl">{props.text}</p>
  ) : (
    <p className="font-semibold my-4 text-5xl">{props.text}</p>
  );
};

const SmallHeader = (props) => {
  return (
    <p className="my-2 font-semibold text-base text-lightblue">{props.text}</p>
  );
};

const DescText = (props) => {
  return props.bigDescription ? (
    <p className="my-4 text-base text-justify text-gray-400">{props.text}</p>
  ) : (
    <p className="my-4 text-base text-justify text-gray-400">{props.text}</p>
  );
};

const Button = (props) => {
  return (
    <button type="button" className="main-button">
      {props.text}
    </button>
  );
};

const ImageOnly = (props) => {
  return (
    <div className="mx-auto p-8">
      <img alt="test" src={props.image} />
    </div>
  );
};

const NumberHighlight = (props) => {
  return (
    <div className="my-2">
      <div className="inline-block font-bold text-8xl text-lightblue">
        {props.no}
      </div>
      <div className="inline-block mx-4 w-32 font-semibold text-2xl">
        {props.text}
      </div>
    </div>
  );
};

const LinkText = (props) => {
  return (
    <a className="font-semibold my-4 text-2xl text-lightblue">{props.text}</a>
  );
};
