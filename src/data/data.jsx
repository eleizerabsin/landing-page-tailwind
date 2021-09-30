import introImage from "../images/img1.svg";
import contactImage from "../images/img2.svg";
import reactIcon from "../images/react-icon.svg";
import reduxIcon from "../images/redux-icon.svg";
import jsIcon from "../images/js-icon.svg";
import htmlIcon from "../images/html-icon.svg";
import springIcon from "../images/spring-icon.svg";
import javaIcon from "../images/java-icon.svg";

export const email = "eleizer.absin@gmail.com";
export const github = "https://github.com/eleizerabsin";
export const linkedin = "https://www.linkedin.com/in/eabsin";

export const intro = {
  smallHeader: "Software Developer",
  header: "Hello, I am Eleizer.",
  description:
    "Software developer who focuses on writing clean, elegant and efficient code. I specialize in building web applications to improve businesses do better online.",
  phone: "Based in Philippines",
  email: email,
  button: "Contact Me",
  image: introImage,
  bigHeader: true,
  typeWriterEffect: true,
};

export const about1 = {
  smallHeader: "About Me",
  header: "I help build things for the web with passion and teamwork.",
  description:
    "I have been working as a professional software developer / software engineer since 2017. Since then, I mostly do full stack (frontend & backend) web application development using various technologies.",
  numberHighlightNo: "4",
  numberHighlightText: "Years Of Experience",
};

export const about2 = {
  smallHeader: "Where i've worked",
  projectList: [
    {
      header1: "Software Engineer",
      header2: "@ UnitedHealth Group",
      subHeader: "September 2020 - June 2021",
      listText: [
        "Write modern and maintainable code for client web application with React and Spring Boot.",
        "Connect with engineers and product owners on a daily basis providing technological expertise.",
      ],
    },
    {
      header1: "Software Engineer",
      header2: "@ Alliance Software",
      subHeader: "May 2017 - June 2020",
      listText: [
        "Developed and shipped web applications for multiple clients. Mostly used React, Spring and PHP.",
        "Collabarated with multiple teams of engineers and designers to discuss application design.",
      ],
    },
  ],
};

export const about3 = {
  smallHeader: "Duis iaculis",
  header: "Fusce dapibus ultrices ipsum vitae blandit.",
  description:
    "Morbi sit amet tempor tortor, at congue ipsum. Praesent sit amet nisi commodo, iaculis nibh non, iaculis tellus. Vestibulum at suscipit risus, vel efficitur elit. Pellentesque felis lectus, placerat eget efficitur at, tincidunt eu magna.",
  numberHighlightNo: "4",
  numberHighlightText: "Donec Fermentum",
};

export const skillsAbout = {
  iconGridHeader: "My Tech",
  header: "Modern tech stack for web apps.",
  description:
    "Here are a few technologies I’ve been working with recently. I mostly use React / Redux for the UI (frontend) and Spring Boot / Java for the API microservies (backend).",
};

export const contact = {
  header: "Let's work together for success.",
  bigHeader: true,
  description: "I'm always open to talk about work or opportunities.",
  bigDescription: true,
  link: "eleizer.absin@gmail.com",
  image: contactImage,
  typeWriterEffect: true,
};

export const iconGrid = [
  {
    image: reactIcon,
    text: "React",
  },
  {
    image: reduxIcon,
    text: "Redux",
  },
  {
    image: jsIcon,
    text: "Javascript",
  },
  {
    image: htmlIcon,
    text: "HTML / CSS",
  },
  {
    image: springIcon,
    text: "Spring Boot",
  },
  {
    image: javaIcon,
    text: "Java",
  },
];
