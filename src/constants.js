
// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import adgips from "./assets/education_logo/adgips.png";
import apj from "./assets/education_logo/apj.png";
import apj2 from "./assets/education_logo/apj.png";

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
      { name: "HTML", logo: "/src/assets/tech_logo/html.png" },
      { name: "CSS", logo: "/src/assets/tech_logo/css.png" },
      { name: "JavaScript", logo: "/src/assets/tech_logo/javascript.png" },
      { name: "React JS", logo: "/src/assets/tech_logo/reactjs.png" },
      { name: "Redux", logo: "/src/assets/tech_logo/redux.png" },
      // { name: "Next JS", logo: "/src/assets/tech_logo/nextjs.png" },
      { name: "Tailwind CSS", logo: "/src/assets/tech_logo/tailwindcss.png" },
      { name: "Material UI", logo: "/src/assets/tech_logo/materialui.png" },
      { name: "Bootstrap", logo: "/src/assets/tech_logo/bootstrap.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: "/src/assets/tech_logo/nodejs.png" },
      { name: "Express JS", logo: "/src/assets/tech_logo/express.png" },
      { name: "MySQL", logo: "/src/assets/tech_logo/mysql.png" },
      { name: "MongoDB", logo: "/src/assets/tech_logo/mongodb.png" },
      { name: "Firebase", logo: "/src/assets/tech_logo/firebase.png" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: "/src/assets/tech_logo/java.png" },
      { name: "JavaScript", logo: "/src/assets/tech_logo/javascript.png" },
      { name: "TypeScript", logo: "/src/assets/tech_logo/typescript.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: "/src/assets/tech_logo/git.png" },
      { name: "GitHub", logo: "/src/assets/tech_logo/github.png" },
      { name: "VS Code", logo: "/src/assets/tech_logo/vscode.png" },
      { name: "Postman", logo: "/src/assets/tech_logo/postman.png" },
      { name: "Compass", logo: "/src/assets/tech_logo/mc.png" },
      { name: "Vercel", logo: "/src/assets/tech_logo/vercel.png" },
      { name: "Netlify", logo: "/src/assets/tech_logo/netlify.png" },
      { name: "Figma", logo: "/src/assets/tech_logo/figma.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
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
    img: apj2,
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
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "TaskFlowPro",
    description:
      "Developed TaskFlow Pro, a scalable employee management system using React and modern web technologies, featuring role-based access, real-time task tracking, and intuitive dashboards to optimize productivity and workflow management",
    image: taskflow,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  
];
