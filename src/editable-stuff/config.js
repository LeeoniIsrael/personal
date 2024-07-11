import calcPngImage from "../editable-stuff/calc-img.png";
import weatherPngImage from "../editable-stuff/weather-img.png";
import InstagramPngImage from "../editable-stuff/instagramclone-img.png";
import financePngImage from "../editable-stuff/financetracker-img.png"
import DormDishPngImage from "../editable-stuff/dormdish-img.png"

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Leeon",
  middleName: "",
  lastName: "Israel",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/leeoniisrael/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/leeoniisrael/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/leeoniisrael.png"),
  imageSize: 375,
  message:
    "My name is Leeon Israel. As a first-generation student at the University of South Carolina, I am currently pursuing a Bachelor's of Science Degree in Computer Information Systems. My passion lies in utilizing my technical skills and analytical thinking to solve complex problems, research and develop new technologies, and design software applications for various platforms. I am particularly interested in the field of Artificial Intelligence, machine learning, and user interface and user experience design within applications and webpages. In my future career, I aim to use my technical expertise and analytical thinking to assist in solving real-world problems in a collaborative setting. I am confident that my strong work ethic, dedication, and passion for technology will enable me to make a positive impact in the industry and contribute to the advancement of technology for the benefit of society.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "leeoniisrael",
  reposLength: [],
  specificRepos: [
    {
      name: "instagram-clone",
      image: InstagramPngImage,
    },
    {
      name: "dorm-dish",
      image: DormDishPngImage,
    },
    {
      name: "personal-finance-tracker",
      image: financePngImage,
    },
    {
      name: "weather",
      image: weatherPngImage,
    },
    {
      name: "calculator",
      image: calcPngImage,
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/leeoniisrael.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/leeoniisrael.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "Java", value: 80 },
    { name: "Python", value: 80 },
    { name: "React Native", value: 80 },
    { name: "Express.js", value: 80 },
    { name: "Node.js", value: 75 },
    { name: "C++", value: 40 },
    { name: "Bash", value: 40 },
  ],
  softSkills: [
    { name: "MongoDB", value: 90 },
    { name: "Git", value: 90 },
    { name: "Selenium Webdriver", value: 90 },
    { name: "RESTful API", value: 90 },
    { name: "ASP.NET Web API", value: 90 },
    { name: "Bootstrap", value: 80 },
    { name: "Postman", value: 80 },
    { name: "Unix", value: 80 },
    { name: "JSON", value: 80 },
    { name: "Figma", value: 80 },
    { name: "YAML", value: 75 },
    { name: "Firebase", value: 70 },
    { name: "OpenSearch", value: 70 },
    { name: "AWS", value: 70 },
    { name: "SQL", value: 65 },
    { name: "Kubernetes", value: 65 },
    { name: "Docker", value: 50 },
    { name: "Grafana", value: 45 },
    { name: "Nginx", value: 40 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering Internships or opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "leeoniisrael@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      div: "John Deere",
      role: "Software Engineer Intern",
      companylogo: require("../assets/img/johndeere.png"),
      date: "May 2024 – Present",
    },
    {
      div: "SEO (Sponsors for Educational Opportunity)",
      role: "SEO Tech Developer",
      companylogo: require("../assets/img/seo.png"),
      date: "May 2024 – Present",
    },
    {
      div: "Artificial Intelligence Institute at University of South Carolina",
      role: "Artificial Intelligence Research Intern",
      companylogo: require("../assets/img/ai_institute_logo.png"),
      date: "January 2023 – May 2024",
    },
    {
      div: "Empowered Buildings",
      role: "Full Stack Software Engineer Intern",
      companylogo: require("../assets/img/empowered.png"),
      date: "June 2023 - September 2023",
    },
    {
      div: "Bank of America",
      role: "Global Technology Early Insights Fellow",
      companylogo: require("../assets/img/bofa.png"),
      date: "January 2024",
    },
    {
      div: "DE Shaw & Co.",
      role: "Connect Fellow",
      companylogo: require("../assets/img/deshaw.png"),
      date: "September 2023",
    },
    {
      div: "HeadStart Fellowship",
      role: "Technology Fellow",
      companylogo: require("../assets/img/headstart.png"),
      date: "January 2023 – April 2023",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
