import { BusinessCenter, School, Description, Launch } from "@mui/icons-material";
import netFlix from "./images/netflixClone.png"
import igClone from "./images/instagramClone.png"
import mClone from "./images/MessengerClone.png"
import DeliveryApp from "./images/DeliveryApp.jpeg"
import breakTime from "./images/breakTime.jpeg"
import CMS from "./images/CMS.jpg"
import ytClone from "./images/maxresdefault.jpg"
import Iot from "./images/Iot.jpeg"
import carpool from "./images/carpool.jpeg"
import samuraiSys from "./images/samuraiSys.jpeg"
import theme1 from "./images/drop (1).png"
import theme2 from "./images/drop.png"
import theme3 from "./images/drop (2).png"
import theme4 from "./images/drop (3).png"
import theme5 from "./images/drop (4).png"
import theme6 from "./images/drop (5).png"
import theme7 from "./images/drop (6).png"
import theme8 from "./images/drop (7).png"
import theme9 from "./images/drop (8).png"
import theme10 from "./images/drop (9).png"
import theme11 from "./images/drop (10).png"
import news from "./images/NewsappClone.jpg"

import { InsertDriveFile } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Code } from "@mui/icons-material";

export const personalInfo = [
  { id: 1, title: "First Name", description: "Haider" },
  { id: 2, title: "Last Name", description: "Ali" },
  { id: 3, title: "Age", description: "22 years" },
  { id: 4, title: "Nationality", description: "Pakistani" },
  { id: 5, title: "Freelance", description: "Available" },
  { id: 6, title: "Address", description: "B-1 Liaquatabad Karachi" },
  { id: 7, title: "Phone", description: "03002420112" },
  { id: 8, title: "Email", description: "ha33216@gmail.com" },
  { id: 10, title: "Language", description: "Urdu, English,Arabic" },
];

export const stats = [
  { id: 1, no: "3+", title: "Years of <br /> Experience" },
  { id: 2, no: "55+", title: "Completed <br /> Projects" },
  { id: 3, no: "100+", title: "Happy<br /> Customers" },
  { id: 4, no: "3+", title: "Certificates <br /> Accomplished" },
];

export const skills = [
  {
    id: 1,
    title: "HTML, CSS, JavaScript",
    percentage: "90",
  },
  {
    id: 2,
    title: "React.js & React Native",
    percentage: "90",
  },
  {
    id: 3,
    title: "React Three Fiber",
    percentage: "80",
  },
  {
    id: 4,
    title: "Next.js",
    percentage: "90",
  },
  {
    id: 5,
    title: "Redux Toolkit",
    percentage: "90",
  },
  {
    id: 6,
    title: "Tanstack Query",
    percentage: "90",
  },
  {
    id: 7,
    title: "Material UI & Radix UI",
    percentage: "90",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    percentage: "90",
  },
  {
    id: 9,
    title: "Firebase",
    percentage: "80",
  },
  {
    id: 10,
    title: "Fastify",
    percentage: "70",
  },
  {
    id: 11,
    title: "MongoDB",
    percentage: "80",
  },
  {
    id: 12,
    title: "SQL",
    percentage: "80",
  },
  {
    id: 13,
    title: "Node.js",
    percentage: "80",
  },
];


export const resume = [
  {
    id: 1,
    category: 'Work Experience',
    icon: <BusinessCenter />,
    year: '01/2024 – Present',
    title: 'Frontend Developer <span>360XpertSolutions</span>',
    desc: 'Worked on several applications and website projects using React Native, React.js, and Next.js. Ensuring responsiveness, scalability, performance optimization, and SEO. Collaborated with backend, SQA, project managers, and design teams. Led app projects from concept to deployment, ensuring timely and high-quality outcomes.'
  },
  {
    id: 2,
    category: 'Work Experience',
    icon: <BusinessCenter />,
    year: '03/2024 – 11/2024',
    title: 'Web Developer <span>Freelance</span>',
    desc: 'Built a fully functional TypeScript-based Tradymate CMS platform for trading professional services through a web platform. <a href="https://app.tradymate.com/" target="_blank">View Project</a>'
  },
  {
    id: 3,
    category: 'Education',
    icon: <School />,
    year: '2021 - 2025',
    title: 'Bachelor of Science in Software Engineering <span>UOK</span>',
    desc: 'Currently in 4th year of university with outstanding performance and a GPA of 3.7.'
  },
  {
    id: 4,
    category: 'Education',
    icon: <School />,
    year: '2018 - 2020',
    title: 'Intermediate in Pre-Engineering <span>Formen Govt College</span>',
    desc: 'Passed Intermediate with 70% marks.'
  },
  {
    id: 5,
    category: 'Education',
    icon: <School />,
    year: '2008 - 2018',
    title: 'Matric In Science <span>Bahria Foundation</span>',
    desc: 'Passed Matric education with 82%.'
  }
];

export const portfolio = [
  {
    id: 1,
    img: samuraiSys,
    title: 'Samurai Systems',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project:',
        desc: 'BreakTime (Web & App), Inventory Management System',
      },
      {
        icon: <Code />,
        title: 'Tech Stack:',
        desc: 'React.js, GSAP',
      },
      {
        icon: <Code />,
        title: 'Link :',
        desc: 'https://www.loom.com/share/e52c77fca5cb458cab3e41e433847c89',
      },
      // https://www.loom.com/share/e52c77fca5cb458cab3e41e433847c89
    ],
  },
  // {
  //   id: 2,
  //   img: attendanceApp,
  //   title: '360 Attendance App',
  //   details: [
  //     {
  //       icon: <InsertDriveFile />,
  //       title: 'Project:',
  //       desc: 'Attendance tracking mobile application',
  //     },
  //     {
  //       icon: <Code />,
  //       title: 'Tech Stack:',
  //       desc: 'React Native, Firebase, Geo Locations, Reanimated',
  //     },
  //   ],
  // },
  {
    id: 3,
    img: Iot,
    title: 'Eagle IoT Car Tracking App',
    // https://www.loom.com/share/da4d86d9e2cb422f8961e0a0012843ea
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project:',
        desc: 'Car tracking mobile application',
      },
      {
        icon: <Code />,
        title: 'Tech Stack:',
        desc: 'React Native, Google Maps, Geo Location, Redux Toolkit, Firebase for push notifications',
      },
      {
        icon: <Code />,
        title: 'Link:',
        desc: 'https://www.loom.com/share/da4d86d9e2cb422f8961e0a0012843ea',
      },
    ],
  },
  {
    id: 4,
    img: CMS,
    title: 'Qatar Govt CMS',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project:',
        desc: 'Large-scale TypeScript-based CMS for managing government sectors and indicators',
      },
      {
        icon: <Code />,
        title: 'Tech Stack:',
        desc: 'React.js, TypeScript, Ant Design (AntD), Zustand, React Query, Authentication & Authorization, i18n',
      },
      {
        icon: <Description />,
        title: 'Features:',
        desc: 'Dashboards, graphs, performance metrics, and data visualization',
      },{
        icon: <Description />,
        title: 'Info:',
        desc: 'THis App is confidential as its managed by Qatar Govt, only accessible to authroized people',
      },
    ],
  },
  {
    id: 5,
    img: carpool,
    title: 'Carpool BYKEA (Web & App)',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project:',
        desc: 'Ride-sharing platform for office-goers and students ',
      },
      {
        icon: <Code />,
        title: 'Tech Stack:',
        desc: 'React.js, JSX, Tailwind CSS, Redux Toolkit, Google Maps API, WebSockets, GraphQL',
      },
      {
        icon: <Description />,
        title: 'Features:',
        desc: 'Real-time tracking, cost-efficient ride-sharing system',
      },
      {
        icon: <Code />,
        title: 'Link : ',
        desc: 'https://www.loom.com/share/74c9a5bf908141939ada3aa1cd7e4504',
      },
    ],
  },
  {
    id: 6,
    img: DeliveryApp,
    title: 'BYKEA Delivery WebApp',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project:',
        desc: 'Rider & Vendor Management Platform for Restaurants',
      },
      {
        icon: <Code />,
        title: 'Tech Stack:',
        desc: 'React.js, Google Maps API, Redux Toolkit, Firebase',
      },
      {
        icon: <Description />,
        title: 'Features:',
        desc: 'Real-time rider tracking, automated & manual order assignments',
      },
    ],
  },
  {
    id: 7,
    img: breakTime,
    title: 'Final Year Project 1 - Inventory Management System',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Inventory Management System',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'University Final Year Project',
      },
      {
        icon: <Code />,
        title: 'FrontEnd : ',
        desc: 'React Native, React Native Vision Camera, Redux Toolkit',
      },
      {
        icon: <Code />,
        title: 'Backend : ',
        desc: 'Node.js (Express.js), PostgreSQL, Firebase Cloud Messaging (FCM), Socket.io',
      },

      // https://www.loom.com/share/169eb45c80b04576b0b8f39401f1f5f1
      {
        icon: <Description />,
        title: 'Features : ',
        desc: 'Order tracking, QR code scanning, and order processing',
      },
      {
        icon: <Code />,
        title: 'Link',
        desc: ' https://www.loom.com/share/169eb45c80b04576b0b8f39401f1f5f1',
      },
]}
];


export const themes = [
  { id: 1, img: theme2, color: 'hsl(0, 78%, 55%)' },   // Vivid Red  
  { id: 2, img: theme1, color: 'hsl(25, 85%, 55%)' },  // Warm Orange  
  { id: 3, img: theme3, color: 'hsl(50, 85%, 55%)' },  // Golden Yellow  
  { id: 4, img: theme4, color: 'hsl(135, 70%, 50%)' }, // Fresh Green  
  { id: 5, img: theme6, color: 'hsl(190, 85%, 55%)' }, // Teal Blue  
  { id: 6, img: theme7, color: 'hsl(220, 75%, 60%)' }, // Cool Blue  
  { id: 7, img: theme8, color: 'hsl(260, 75%, 65%)' }, // Soft Purple  
  { id: 8, img: theme9, color: 'hsl(290, 80%, 60%)' }, // Vibrant Violet  
  { id: 9, img: theme10, color: 'hsl(330, 75%, 65%)' },// Playful Pink  
  { id: 10, img: theme11, color: 'hsl(200, 80%, 70%)' } // Light Aqua  
];