import React from "react";
import ImageOne from "../../images/img1.svg";
import ImageTwo from "../../images/img2.svg";

const introText = {
  smallHeader: "Duis iaculis",
  header: "Fusce dapibus ultrices ipsum vitae blandit.",
  description:
    "Morbi sit amet tempor tortor, at congue ipsum. Praesent sit amet nisi commodo, iaculis nibh non, iaculis tellus. Vestibulum at suscipit risus, vel efficitur elit. Pellentesque felis lectus, placerat eget efficitur at, tincidunt eu magna.",
  phone: "P: +123 456 7890",
  email: "E: Morbisuscipit@mail.com",
  button: "Praesent sit",
};

const aboutMeText = {
  smallHeader: "Duis iaculis",
  header: "Fusce dapibus ultrices ipsum vitae blandit.",
  description:
    "Morbi sit amet tempor tortor, at congue ipsum. Praesent sit amet nisi commodo, iaculis nibh non, iaculis tellus. Vestibulum at suscipit risus, vel efficitur elit. Pellentesque felis lectus, placerat eget efficitur at, tincidunt eu magna.",
  numberHighlightNo: "4",
  numberHighlightText: "Donec Fermentum",
};

const queryText = {
  header: "Praesent iaculis sed nunc.",
  bigHeader: true,
  description:
    "Mauris pulvinar eget erat eget aliquam. Cras pulvinar tellus in nisl fermentum euismod",
  bigDescription: true,
  link: "rutrum-elementum@email.com",
};

export const SectionTypeOne = () => {
  return (
    <div className="">
      <div className="container mx-auto max-w-screen-lg section-height">
        {/* <div className="flex flex-wrap content-center section-height items-center"> */}
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...introText} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <ImageOnly src={ImageOne} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeTwo = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-screen-lg section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...aboutMeText} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...queryText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeThree = () => {
  return (
    <div className="">
      <div className="container mx-auto max-w-screen-lg section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <ImageOnly src={ImageTwo} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...introText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTypeFour = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-screen-lg section-height">
        <div className="flex flex-wrap section-height">
          <div className="flex-1 min-w-section py-2">
            <TwoBlockHeaderDesc {...aboutMeText} />
          </div>
          <div className="flex-1 min-w-section py-2">
            <OneBlockGridImage />
          </div>
        </div>
      </div>
    </div>
  );
};

const OneBlockGridImage = (props) => {
  return (
    <div className="text-center">
      <div class="grid grid-cols-3 gap-4 justify-center">
        <div className="w-24 mx-auto my-8  px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <path
              fill="#E44D26"
              d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
            ></path>
          </svg>
          <div className="my-4 font-semibold text-gray-500">HTML</div>
        </div>
        <div className="w-24 mx-auto my-8  px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <path
              fill="#F0DB4F"
              d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
            ></path>
          </svg>
          <div className="my-4 font-semibold text-gray-500">Javascript</div>
        </div>
        <div className="w-24 mx-auto my-8  px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <path
              fill="#EA2D2E"
              d="M53.595 67.817c-13.224 3.694 8.044 11.325 24.88 4.112-2.757-1.071-4.735-2.309-4.735-2.309-7.508 1.419-10.99 1.531-17.805.753-5.625-.644-2.34-2.556-2.34-2.556zm22.864-7.207c-9.95 1.915-15.698 1.854-22.979 1.103-5.629-.582-1.944-3.311-1.944-3.311-14.563 4.834 8.106 10.318 28.459 4.365-2.162-.761-3.536-2.157-3.536-2.157zm7.799-41.731s-29.439 7.351-15.38 23.552c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.518-6.349-7.982-9.502 10.772-20.378zM37.48 81.305c34.324 5.563 62.567-2.506 53.666-6.523 0 0 2.431 2.005-2.679 3.555-9.715 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.404-22.055 4.718-9.469 6.761zm41.868-27.42c1.65-1.126 3.93-2.104 3.93-2.104s-6.492 1.161-12.961 1.704c-7.918.664-16.412.795-20.676.225-10.095-1.35 5.534-5.063 5.534-5.063s-6.07-.411-13.533 3.199c-8.827 4.269 21.832 6.214 37.706 2.039zm3.865 10.432c-.074.2-.322.425-.322.425 21.546-5.664 13.624-19.965 3.322-16.345-.903.319-1.378 1.063-1.378 1.063s.571-.23 1.845-.496c5.207-1.084 12.669 6.972-3.467 15.353zM65.006 48.492c-3.179-7.186-13.957-13.471.005-24.498 17.41-13.742 8.476-22.682 8.476-22.682 3.604 14.197-12.711 18.486-18.6 27.328-4.01 6.024 1.969 12.499 10.119 19.852zm18.79 35.651c-13.219 2.488-29.524 2.199-39.191.603 0 0 1.98 1.64 12.157 2.294 15.484.99 39.269-.551 39.832-7.878 0-.001-1.082 2.776-12.798 4.981zM51.131 99.535c-2.887 0-5.351.714-7.408 1.622l.624 2.493c1.619-.595 3.618-1.147 5.674-1.147 2.85 0 3.979 1.147 3.979 3.521V108h-1.2c-6.921 0-10.044 2.585-10.044 6.624 0 3.479 2.059 5.407 5.933 5.407 2.49 0 4.351-.845 6.088-2.35l.316 2.319H58v-14.492c0-3.599-1.924-5.973-6.869-5.973zM54 115.037c-1 1.266-2.893 1.978-4.279 1.978-1.973 0-2.988-1.371-2.988-3.27 0-2.056 1.202-3.745 5.794-3.745H54v5.037zm15.611.644l-.835-3.608L65.02 100h-4.39l6.051 20h5.026c2.884-7 4.943-14 6.086-20h-4.271c-.671 5-2.016 10.424-3.911 15.681zm18.404-16.146c-2.889 0-5.411.714-7.467 1.622l.596 2.493c1.621-.595 3.722-1.147 5.778-1.147 2.846 0 4.078 1.147 4.078 3.521V108h-1.428c-6.923 0-10.045 2.585-10.045 6.624 0 3.479 2.056 5.407 5.93 5.407 2.492 0 4.349-.845 6.091-2.35l.318 2.319H95v-14.492c0-3.599-2.044-5.973-6.985-5.973zm-1.411 17.462c-1.975 0-3.046-1.363-3.046-3.261 0-2.055 1.149-3.736 5.736-3.736H91v5h-.067c-1.465 1-2.947 1.997-4.329 1.997zM36 115.373c0 3.271-.445 4.638-.979 5.701-.615 1.193-2.053 2.475-3.601 3.269l1.934 2.345c2.032-.749 3.943-2.078 5.092-3.757 1.15-1.723 1.554-3.491 1.554-7.867V93h-4v22.373z"
            ></path>
          </svg>
          <div className="my-4 font-semibold text-gray-500">Java</div>
        </div>
        <div className="w-24 mx-auto my-8 px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <style></style>
            <g id="spring-original-wordmark-surface1" fill="#5FB832">
              <path d="M1.7 98.6c-.6-.3-1-1-1-1.8 0-1.2.9-2.1 2.1-2.1.4 0 .8.1 1.1.3 2.2 1.5 4.6 2.2 6.7 2.2 2.3 0 3.6-1 3.6-2.5v-.1c0-1.8-2.5-2.4-5.2-3.2-3.4-1-7.2-2.4-7.2-6.8v-.1c0-4.4 3.6-7 8.2-7 2.5 0 5 .7 7.3 1.9.7.4 1.3 1.1 1.3 2 0 1.2-1 2.1-2.2 2.1-.4 0-.7-.1-1.1-.3-1.9-1-3.8-1.6-5.4-1.6-2.1 0-3.2 1-3.2 2.3v.1c0 1.7 2.5 2.4 5.2 3.3 3.4 1 7.2 2.6 7.2 6.7v.1c0 4.9-3.8 7.3-8.6 7.3-2.9 0-6.1-.9-8.8-2.8M39.8 89.5c0-4.5-3-7.4-6.6-7.4s-6.7 3-6.7 7.4v.1c0 4.4 3.1 7.4 6.7 7.4 3.6-.2 6.6-3 6.6-7.5m-18.4-9.3c0-1.5 1.1-2.7 2.6-2.7s2.7 1.2 2.7 2.7v1.6c1.7-2.4 4.1-4.3 7.8-4.3 5.4 0 10.7 4.3 10.7 11.9v.1c0 7.6-5.2 11.9-10.7 11.9-3.8 0-6.2-1.9-7.8-4v8.1c0 1.5-1.2 2.6-2.7 2.6-1.4 0-2.6-1.1-2.6-2.6V80.2M47.4 80.1c0-1.5 1.1-2.7 2.6-2.7s2.7 1.2 2.7 2.7v1.3c.3-2 3.5-3.9 5.8-3.9 1.7 0 2.6 1.1 2.6 2.6 0 1.4-.9 2.3-2.1 2.5-3.8.7-6.4 3.9-6.4 8.5v7.6c0 1.4-1.2 2.6-2.7 2.6-1.4 0-2.6-1.1-2.6-2.6V80.1M63.5 80.1c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v18.6c0 1.5-1.2 2.6-2.7 2.6-1.5 0-2.7-1.1-2.7-2.6V80.1M71.2 80.2c0-1.5 1.2-2.7 2.7-2.7s2.8 1.2 2.8 2.7v1.1c1.5-2.1 3.8-3.8 7.5-3.8 5.4 0 8.5 3.5 8.5 8.8v12.4c0 1.5-1.2 2.6-2.7 2.6s-2.8-1.1-2.8-2.6V87.9c0-3.6-1.9-5.6-5.1-5.6-3.2 0-5.4 2.1-5.4 5.7v10.7c0 1.5-1.2 2.6-2.8 2.6-1.5 0-2.7-1.1-2.7-2.6V80.2M106.5 96.9c-3.7 0-6.8-2.8-6.8-7.4v-.1c0-4.5 3.1-7.4 6.8-7.4 3.7 0 6.9 3 6.9 7.4v.1c0 4.4-3.2 7.4-6.9 7.4m9.5-19.3c-1.5 0-2.7 1.2-2.7 2.7v1.6c-1.8-2.4-4.2-4.3-8.1-4.3-5.6 0-11 4.3-11 12v.1c0 7.6 5.4 12 11 12 3.9 0 6.4-1.9 8.1-4-.3 4.2-2.9 6.3-7.5 6.3-2.7 0-5.1-.7-7.3-1.8-.3-.1-.6-.2-1-.2-1.3 0-2.3 1-2.3 2.2 0 1 .6 1.7 1.5 2.1 2.9 1.4 5.8 2.1 9.2 2.1 4.3 0 7.6-1 9.8-3.1 2-1.9 3.1-4.8 3.1-8.7V80.2c-.1-1.5-1.3-2.6-2.8-2.6M68.9 71.1c0 1.4-1.2 2.6-2.7 2.6-1.5 0-2.7-1.2-2.7-2.6 0-1.4 1.2-2.6 2.7-2.6 1.5 0 2.7 1.2 2.7 2.6M82.9 53.8C77 61.6 64.3 59 56.1 59.3c0 0-1.4.1-2.9.3 0 0 .6-.2 1.2-.5 5.7-1.9 8.4-2.3 11.9-4.1 6.5-3.3 13-10.4 14.3-17.8-2.5 7.1-10 13.2-16.9 15.7-4.7 1.7-13.2 3.3-13.2 3.3l-.3-.2c-5.8-2.7-6-15 4.6-18.9 4.6-1.7 9-.8 14-1.9 5.3-1.2 11.5-5.1 14-10.2 2.8 8.3 6.2 21 .1 28.8zm.1-31.2c-.7 1.6-1.6 3.1-2.6 4.4-4.4-4.4-10.5-7.1-17.3-7.1C49.8 19.9 39 30.5 39 43.4c0 6.8 3 12.9 7.7 17.2l.5.5c-.9-.7-1-2-.3-2.8.7-.9 2-1 2.9-.3s1 2 .3 2.8c-.7.9-2 1-2.9.3l.4.3c4.2 3.4 9.6 5.5 15.5 5.5 12.7 0 23.1-9.7 24-21.8.8-5.9-1-13.5-4.1-22.5M125.1 79.2h-.9v1.2h.9c.3 0 .6-.2.6-.6 0-.4-.3-.6-.6-.6zm.5 3l-.9-1.4h-.6v1.4h-.5v-3.4h1.4c.6 0 1.1.4 1.1 1 0 .8-.7 1-.9 1l.9 1.4h-.5zm-.8-4.3c-1.4 0-2.6 1.1-2.6 2.5s1.2 2.5 2.6 2.5c1.4 0 2.6-1.1 2.6-2.5 0-1.3-1.2-2.5-2.6-2.5zm0 5.6c-1.7 0-3.1-1.3-3.1-3s1.4-3 3.1-3c1.7 0 3.1 1.3 3.1 3 0 1.6-1.4 3-3.1 3"></path>
            </g>
          </svg>
          <div className="my-4 font-semibold text-gray-500">Spring</div>
        </div>
        <div className="w-24 mx-auto my-8 px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <g fill="#61DAFB">
              <circle cx="64" cy="64" r="11.4"></circle>
              <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
            </g>
          </svg>
          <div className="my-4 font-semibold text-gray-500">React</div>
        </div>
        <div className="w-24 mx-auto my-8 px-4 py-10 bg-gray-100 rounded-full">
          <svg viewBox="0 0 128 128">
            <path
              fill="#1572B6"
              d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"
            ></path>
          </svg>
          <div className="my-4 font-semibold text-gray-500">CSS</div>
        </div>
      </div>
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
    <p className="my-2 font-semibold text-base text-gray-800">{props.text}</p>
  );
};

const DescText = (props) => {
  return props.bigDescription ? (
    <p className="my-4 text-base text-justify">{props.text}</p>
  ) : (
    <p className="my-4 text-base text-justify">{props.text}</p>
  );
};

const Button = (props) => {
  return (
    <button
      type="button"
      className="text-lg border my-2 border-gray-400 rounded-lg px-7 py-2 font-semibold hover:bg-gray-200"
    >
      {props.text}
    </button>
  );
};

const ImageOnly = (props) => {
  return (
    <div className="mx-auto p-8">
      <img alt="test" src={props.src} />
    </div>
  );
};

const NumberHighlight = (props) => {
  return (
    <div className="my-2">
      <div className="inline-block font-bold text-8xl">{props.no}</div>
      <div className="inline-block mx-4 w-32 font-semibold text-2xl">
        {props.text}
      </div>
    </div>
  );
};

const LinkText = (props) => {
  return <a className="font-semibold my-4 text-2xl">{props.text}</a>;
};
