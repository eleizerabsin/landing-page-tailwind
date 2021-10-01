import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

export const SectionTypeOne = (props) => {
  return (
    <div className="bg-bggray1 py-10">
      <div className="common-container section-height">
        {/* <div className="flex flex-wrap content-center section-height items-center"> */}
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2 px-5">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2 px-5">
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
          <div className="flex-1 min-w-section py-2 px-5">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2 px-5">
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
          <div className="flex-1 min-w-section py-2 px-5">
            <ImageOnly {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2 px-5">
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
          <div className="flex-1 min-w-section py-2 px-5">
            <OneBlockGridImage
              iconGrid={props.iconGrid}
              iconGridHeader={props.datacol1.iconGridHeader}
            />
          </div>
          <div className="flex-1 min-w-section py-2 px-5">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeFive = (props) => {
  return (
    <div className="bg-bggray2 py-10">
      <div className="common-container section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2 px-5">
            <TwoBlockHeaderDesc {...props.datacol1} />
          </div>
          <div className="flex-1 min-w-section py-2 px-5">
            <TwoBlockHeaderDesc {...props.datacol2} />
          </div>
        </div>
      </div>
    </div>
  );
};

const OneBlockGridImage = (props) => {
  var iconGrid = props.iconGrid
    ? props.iconGrid.map((icon, index) => {
        return (
          <div key={index}>
            <div className="image-capsule">
              <img alt="test" src={icon.image} />
            </div>
            <div className="my-4 font-semibold text-white text-sm font-mono">
              {icon.text}
            </div>
          </div>
        );
      })
    : "";

  return (
    <div className="sm:w-96 mx-auto">
      <div className="my-8">
        <SmallHeader text={props.iconGridHeader} />
      </div>
      <div className="text-center">
        <div className="grid grid-cols-3 gap-4 justify-center">{iconGrid}</div>
      </div>
    </div>
  );
};

const TwoBlockHeaderDesc = (props) => {
  return (
    <div className="sm:w-96 mx-auto">
      {props.smallHeader ? <SmallHeader text={props.smallHeader} /> : ""}
      {props.projectList ? <ProjectList projectList={props.projectList} /> : ""}
      {props.header ? (
        <HeaderText
          text={props.header}
          bigHeader={props.bigHeader}
          typeWriterEffect={props.typeWriterEffect}
        />
      ) : (
        ""
      )}
      {props.description ? (
        <DescText
          text={props.description}
          bigDescription={props.bigDescription}
          descImage={props.descImage}
        />
      ) : (
        ""
      )}
      {/* {props.bigHeader && props.bigDescription ? (
        <div className="mb-20"></div>
      ) : (
        ""
      )} */}
      {props.link ? <LinkText text={props.link} email={props.link} /> : ""}
      {props.github && props.linkedin ? (
        <div className="space-x-4 text-4xl text-lightblue my-4">
          <div className="inline-block">
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original hover:text-white"></i>
            </a>
          </div>
          <div className="inline-block">
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain hover:text-white"></i>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      {props.phone ? <SmallHeader text={props.phone} /> : ""}
      {props.email ? <SmallHeader text={props.email} /> : ""}
      {props.button ? <Button text={props.button} email={props.email} /> : ""}
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

const ProjectList = (props) => {
  var projectList =
    props.projectList && props.projectList.length > 0
      ? props.projectList.map((item, index) => {
          return (
            <div key={index} className="py-4">
              <p className="inline-block font-semibold text-lg  text-gray-400">
                {item.header1}
              </p>
              <p className="inline-block font-semibold text-lightblue text-lg">
                &nbsp;{item.header2}
              </p>
              <p className="my-2 text-sm font-mono text-gray-400">
                {item.subHeader}
              </p>
              {item.listText && item.listText.length > 0 ? (
                <ul className="list-inside">
                  {" "}
                  {item.listText.map((listItem, listIndex) => {
                    return (
                      <li
                        key={listIndex}
                        className="my-2 text-sm text-gray-400"
                      >
                        {listItem}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </div>
          );
        })
      : "";

  return <>{projectList}</>;
};

const HeaderText = (props) => {
  return props.bigHeader ? (
    props.typeWriterEffect ? (
      <div className="font-semibold my-10 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600">
        <TypeWriterEffect
          startDelay={20}
          cursorColor="gray"
          text={props.text}
          typeSpeed={100}
        />
      </div>
    ) : (
      <p className="font-semibold my-10 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600">
        {props.text}
      </p>
    )
  ) : (
    <p className="font-semibold my-10 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600">
      {props.text}
    </p>
  );
};

const SmallHeader = (props) => {
  return (
    <p className="my-2 text-base text-lightblue font-mono">{props.text}</p>
  );
};

const DescText = (props) => {
  return props.bigDescription ? (
    <>
      <p className="my-4 text-base text-justify text-gray-400">{props.text}</p>
      {props.descImage ? (
        <div className="py-8">
          <img
            className="rounded-3xl w-6/12"
            src={props.descImage}
            alt="desc-img"
          ></img>
        </div>
      ) : (
        ""
      )}
    </>
  ) : (
    <p className="my-4 text-base text-justify text-gray-400">{props.text}</p>
  );
};

const Button = (props) => {
  return (
    <a className="inline-block main-button" href={"mailto:" + props.email}>
      {props.text}
    </a>
  );
};

const ImageOnly = (props) => {
  return (
    <div className="mx-auto p-12">
      <img
        alt="section-img"
        className={props.imageRounded ? "rounded-3xl" : ""}
        src={props.image}
      />
    </div>
  );
};

const NumberHighlight = (props) => {
  return (
    <div className="my-2">
      <div className="inline-block font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600">
        {props.no}
      </div>
      <div className="inline-block mx-4 w-32 font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600">
        {props.text}
      </div>
    </div>
  );
};

const LinkText = (props) => {
  return (
    <a
      href={"mailto:" + props.email}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold my-4 text-2xl text-lightblue hover:underline"
    >
      <div className="inline-block hover:underline hover:text-white">
        {props.text}
      </div>
      <div className="inline-block mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </a>
  );
};
