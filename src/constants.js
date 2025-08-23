
// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";
import adgips from "./assets/education_logo/adgips.png";
import apj from "./assets/education_logo/apj.png";

// Project Section Logo's
import assetvue from "./assets/work_logo/AssetVue.png";
import taskflow from "./assets/work_logo/Task_Flow.png";
// import movierecLogo from "./assets/work_logo/movie_rec.png";
// import taskremLogo from "./assets/work_logo/task_rem.png";
// import npmLogo from "./assets/work_logo/npm.png";
// import webverLogo from "./assets/work_logo/web_dig.png";
// import cmLogo from "./assets/work_logo/cm.png";
// import imagesearchLogo from "./assets/work_logo/image_search.png";
// import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];



export const education = [
  {
    id: 0,
    img: adgips,
    school: "Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi",
    date: "Aug 2021 - May 2025",
    grade: "8.61 CGPA",
    desc: "I have completed my Bachelor of Technology in Information Technology from Dr. Akhilesh Das Gupta Institute of Professional Studies. During my academic journey, I developed a strong foundation in areas such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Operating Systems, and Software Engineering. I also worked on projects involving full-stack development and API integrations, which enhanced my practical knowledge. In addition, I actively participated in coding contests, workshops, and technical events that sharpened my problem-solving abilities and technical expertise.",
    degree: "Bachelor Of Technology in Information Technology",
  },
  {
    id: 1,
    img: apj,
    school: "Apeejay School Pitampura, Delhi",
    date: "April 2020 - July 2021",
    grade: "82.6%",
    desc: "I completed my Class 12 education from Apeejay School, Pitampura, Delhi under the CBSE board, with a focus on Physics, Chemistry, Mathematics (PCM), and Information Practices. My senior secondary education helped me build strong analytical and logical thinking skills, which laid the foundation for my technical journey.",
    degree: "CBSE (XII) - PCM with Information Practices",
  },
  {
    id: 2,
    img: apj,
    school: "Apeejay School Pitampura, Delhi",
    date: "Apr 2018 - May 2019",
    grade: "86.2%",
    desc: "I completed my Class 10 education from Apeejay School, Pitampura, Delhi under the CBSE board, with a focus on Science and Computer Applications. My secondary education gave me an early interest in technology and problem-solving, which motivated me to pursue a career in the IT field.",
    degree: "CBSE (X) - Science with Computer Applications",
  }
];


export const projects = [
  {
    id: 0,
    title: "Asset Vue",
    description:
      "Built AssetVue, a React + Redux portfolio tracker with Firebase integration, enabling real-time syncing, automated price updates, asset filtering, and interactive visualizations for actionable investment insights with accessible, dark-mode optimized UI.",
    image: assetvue,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/PranavArora20/Asset-Vue",
    webapp: "https://asset-vue-investment-tracker.netlify.app/",
  },
  {
    id: 1,
    title: "TaskFlowPro",
    description:
      "Developed TaskFlow Pro, a scalable employee management system using React and modern web technologies, featuring role-based access, real-time task tracking, and intuitive dashboards to optimize productivity and workflow management",
    image: taskflow,
    tags: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/PranavArora20/TaskFlowPro-Employee-Management-System",
    webapp: "https://taskflowpero.netlify.app/",
  },
  
];
