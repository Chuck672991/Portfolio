import { BusinessCenter,School,Description,Launch } from "@mui/icons-material";
import netFlix from "./images/netflixClone.png"
import igClone from "./images/instagramClone.png"
import mClone from "./images/MessengerClone.png"
import ytClone from "./images/maxresdefault.jpg"
import aClone from "./images/Amazonclone.jpg"
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
  { id: 3, title: "Age", description: "20 years" },
  { id: 4, title: "Nationality", description: "Pakistani" },
  { id: 5, title: "Freelance", description: "Available" },
  { id: 6, title: "Address", description: "B-1 Liaquatabad Karachi" },
  { id: 7, title: "Phone", description: "03002420112" },
  { id: 8, title: "Email", description: "haiderali2275@gmail.com" },
  { id: 9, title: "Instagram", description: "haiderx__x" },
  { id: 10, title: "Language", description: "Urdu, English" },
];

export const stats = [
  { id: 1, no: "1+", title: "Years of <br /> Experience" },
  { id: 2, no: "5+", title: "Completed <br /> Projects" },
  { id: 3, no: "3+", title: "Happy<br /> Customers" },
  { id: 4, no: "1+", title: "Certificates <br /> Accomplished" },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "65",
  },
  {
    id: 2,
    title: "Css",
    percentage: "54",
  },
  {
    id: 3,
    title: "Javascript",
    percentage: "42",
  },
  {
    id: 4,
    title: "React",
    percentage: "60",
  },
  {
    id: 5,
    title: "Mongo",
    percentage: "25",
  },
  {
    id: 6,
    title: "Node",
    percentage: "35",
  },
  {
    id: 7,
    title: "Express",
    percentage: "15",
  },

  {
    id: 8,
    title: "Ui/Ux",
    percentage: "35",
  },
  {
    id: 9,
    title: "Firebase",
    percentage: "50",
  },
];

export const resume = [
  {
    id: 1,
    category: 'Work Experience',
    icon: <BusinessCenter/>,
    year: '2023 - Present',
    title: 'Web Developer <span>FreeLance</span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo in nisi gravida consectetur.'
  },
  {
    id: 2,
    category: 'Education',
    icon: <School/>,
    year: '2021 - 2025',
    title: 'Bachelor of Science in Software Engineering <span>UOK</span>',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },  {
    id: 3,
    category: 'Education',
    icon: <School/>,
    year: '2018 - 2020',
    title: 'Intermediate in Pre-Engineering <span>Formen Govt College</span>',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },  {
    id: 4,
    category: 'Education',
    icon: <School/>,
    year: '2008 - 2018',
    title: 'Matric In Science <span>Bahria Foundation</span>',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 5,
    category: 'Work Experience',
    icon: <BusinessCenter/>,
    year: '2023 - Present',
    title: 'Ui/Ux <span>Projects</span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo in nisi gravida consectetur.'
  },
  {
    id: 6,
    category: 'Work Experience',
    icon: <BusinessCenter/>,
    year: '2023 - Present',
    title: 'Sql Queries <span>Uni Projects</span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo in nisi gravida consectetur.'
  },
];
export const portfolio = [
  {
    id: 1,
    img: igClone,
    title: 'Instagram Clone',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <Launch />,
        title: 'Language : ',
        desc: 'Javascript',
      },
    ],
  },  {
    id: 2,
    img: news,
    title: 'News App',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
       {
        icon: <Launch />,
        title: 'Language : ',
        desc: 'Javascript',
      },
    ],
  },  {
    id: 3,
    img: mClone,
    title: 'Messenger Clone',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <Launch />,
        title: 'Language : ',
        desc: 'Javascript',
      },
    ],
  },  {
    id: 4,
    img: ytClone,
    title: 'Youtube Clone',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <Launch />,
        title: 'Language : ',
        desc: 'Javascript',
      },
    ],
  },  {
    id: 5,
    img: aClone,
    title: 'Amazon Clone',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <Launch />,
        title: 'Language : ',
        desc: 'Javascript',
      },
    ],
  },  {
    id: 6,
    img: netFlix,
    title: 'Netflix Clone',
    details: [
      {
        icon: <InsertDriveFile />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <Person />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <Code />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <Description />,
        title: 'React Js Netflix Project : ',
        desc: 'A cool website to watch trailer of trending movies and other more categories of movies  ',
      },
    ],
  },
 
  // Repeat the structure for the remaining portfolio items
];

export const themes =[ 
   { id: 1, img: theme2, color: 'hsl(0, 80%, 50%)' },
   { id: 2, img: theme1, color: 'hsl(30, 80%, 50%)' },
  { id: 3, img: theme3, color: 'hsl(60, 80%, 50%)' },
   { id: 4, img: theme4, color: 'hsl(120, 80%, 50%)' },
   { id: 5, img: theme6, color: 'hsl(180, 80%, 50%)' },//ok
   { id: 6, img: theme7, color: 'hsl(210, 80%, 50%)' },
  //  { id: 7, img: theme8, color: 'hsl(240, 80%, 50%)' },
  //  { id: 8, img: theme8, color: 'hsl(300, 80%, 50%)' },
  //  { id: 9, img: theme9, color: 'hsl(330, 80%, 50%)' },
  //  { id: 10, img: theme11, color: 'hsl(45, 80%, 50%)' },
   { id: 11, img: theme10, color: 'hsl(200, 79%, 70%)  ' },



]