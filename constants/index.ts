import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

export const PERSONAL_INFO = {
  name: "Ritesh Singh",
  title: "B.Tech Computer Science & Engineering",
  subtitle: "Full Stack & C++ Developer | AI / ML Enthusiast",
  email: "cosmo1rit@gmail.com",
  phone: "+91 9369870300",
  github: "https://github.com/Riteshsingh-D15",
  linkedin: "https://www.linkedin.com/in/ritesh-singh-d15/",
  location: "Phagwara, Punjab / Gorakhpur, Uttar Pradesh",
  about:
    "Passionate Computer Science and Engineering student at Lovely Professional University. Skilled in C++, Python, Data Structures & Algorithms, Full Stack Web Development (React.js, Node.js, Flask), Database Management, and Machine Learning. Eager to solve challenging problems and build scalable, high-performance applications.",
  softSkills: [
    "Resourceful",
    "Collaborative",
    "Resilient",
    "Inventive",
    "Problem Solver",
    "Analytical Thinker",
  ],
};

export const SKILL_DATA = [
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "C",
    image: "c.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ritesh-singh-d15/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Riteshsingh-D15",
  },
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:cosmo1rit@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "C",
    image: "c.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "Movie Recommendation System",
    subtitle: "C++, Flask, PostgreSQL, ML Algorithms, Redis",
    date: "July 2026",
    description:
      "Spearheaded the development of a hybrid movie recommendation system integrating Graphs, Trie, HashMap, and Priority Queue structures with ML algorithms, improving accuracy by 15%. Optimized recommendation algorithms from O(n²) to O(n log n), achieving 85% performance improvement on 5000+ movies. Orchestrated end-to-end launch of a Flask-based web platform with PostgreSQL, responsive UI, and Redis caching, sustaining 600 simultaneous users while keeping response times under 180 ms.",
    tags: ["C++", "Flask", "PostgreSQL", "Machine Learning", "Redis", "Data Structures"],
    image: "/projects/movie-rec.jpg",
    link: "https://github.com/Riteshsingh-D15",
  },
  {
    title: "Crop Prediction System",
    subtitle: "HTML, CSS, JavaScript, Node.js, Express, Chart.js",
    date: "Mar 2026",
    description:
      "Predicts crop yields and profit margins by combining weather forecasts with 10 years of farm data across 20+ crops. Engineered a multi-factor agronomic scoring algorithm evaluating 6 core parameters (temperature, precipitation, soil type, season, area) to automate best-fit crop selection, irrigation scheduling, and disease risk mitigation. Features asynchronous API consumption, interactive Chart.js visualizations, client-side history caching, and multi-format report exports (PDF, CSV, JSON).",
    tags: ["Node.js", "Express", "JavaScript", "HTML/CSS", "Chart.js", "APIs"],
    image: "/projects/cropsense.png",
    link: "https://github.com/Riteshsingh-D15",
    deployLink: "https://cropsense-6c81.onrender.com/",
  },
  {
    title: "AiGrammar & Translation Tool",
    subtitle: "Python, NLP, AI, Flask, REST API",
    date: "Oct 2025",
    description:
      "Developed an AI-powered grammar correction tool to detect and correct spelling, grammar, and sentence structure errors. Implemented multilingual text translation using NLP and language-processing APIs for accurate and efficient translations. Packaged as a clean, responsive Flask web application that processes text through a robust REST API with an accessible interface.",
    tags: ["Python", "NLP", "AI", "Flask", "REST API"],
    image: "/projects/aigrammar.png",
    link: "https://github.com/Riteshsingh-D15",
    deployLink: "https://grammar-frontend-rho.vercel.app/",
  },
] as const;

export const EDUCATION_DATA = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.07",
    period: "Aug 2024 – Present",
    expectedCompletion: "Aug 2026",
    location: "Phagwara, Punjab",
    details: [
      "Specializing in Computer Science and Engineering with focus on Software Engineering, Core Computing, and Advanced Data Structures.",
      "Active participant in technical coding challenges and team projects.",
    ],
  },
  {
    institution: "Ratna Memorial Public School",
    degree: "Intermediate (Class XII) - Physics, Chemistry, Mathematics (PCM)",
    score: "Percentage: 72%",
    period: "Mar 2023 – May 2024",
    location: "Gorakhpur, Uttar Pradesh",
    details: [
      "Rigorous pre-engineering coursework in Higher Mathematics, Physics, and Chemistry.",
    ],
  },
  {
    institution: "Ratna Memorial Public School",
    degree: "High School (Class X)",
    score: "Percentage: 79.2%",
    period: "Mar 2022 – May 2023",
    location: "Gorakhpur, Uttar Pradesh",
    details: [
      "Strong foundational academics in Mathematics, Science, and Computer Applications.",
    ],
  },
] as const;

export const TRAINING_AND_EXPERIENCE = [
  {
    title: "Summer Training in Data Structures using C++",
    organization: "Lovely Professional University",
    period: "Jun 2026 – Jul 2026",
    location: "Lovely Professional University, Phagwara",
    highlights: [
      "Implemented comprehensive data structures and algorithms using modern C++, including arrays, linked lists, stacks, queues, trees, graphs, and hashing.",
      "Solved complex algorithmic problems using C++ STL, recursion, dynamic programming, and asymptotic complexity analysis.",
      "Engineered optimized code adhering to modular programming best practices.",
    ],
  },
] as const;

export const CERTIFICATIONS_DATA = [
  {
    title: "Database Management System Part - 1",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    link: "https://drive.google.com/file/d/1oTLt19IOeaIg9Jm_cwEeZRmhUi_nozby/view?usp=sharing",
    skills: ["Relational Databases", "SQL Queries", "Database Design", "Normalization", "Indexing"],
  },
  {
    title: "Database Management System Part - 2",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    link: "https://drive.google.com/file/d/10yo4JgilxhtfxiotCcKlqwzmjT2drpBn/view?usp=sharing",
    skills: ["Advanced SQL", "Transactions & ACID", "PL/SQL", "Stored Procedures", "Query Optimization"],
  },
  {
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1sm7glqpm5sKJ5SwmDrJ4MdZZLUmVKAgr/view?usp=sharing",
    skills: ["C++ Core", "Object-Oriented Programming", "Memory Management", "Algorithms", "Problem Solving"],
  },
  {
    title: "C Programming Course",
    issuer: "CSE Pathshala",
    date: "Jan 2025",
    link: "https://drive.google.com/file/d/1mWca83o8KPs2DyqV9hZQBvjh6FQMTu6G/view?usp=sharing",
    skills: ["C Programming", "Pointers & Memory", "Control Flow", "Functions & Arrays", "Data Types"],
  },
  {
    title: "C Language Certification",
    issuer: "Techveda",
    date: "2025",
    skills: ["C Programming", "Pointers & References", "Memory Management", "Problem Solving"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: "cosmo1rit@gmail.com",
        icon: FaEnvelope,
        link: "mailto:cosmo1rit@gmail.com",
      },
      {
        name: "+91 9369870300",
        icon: FaPhoneAlt,
        link: "tel:+919369870300",
      },
      {
        name: "Phagwara / Gorakhpur",
        icon: FaMapMarkerAlt,
        link: "https://maps.google.com/?q=Lovely+Professional+University",
      },
    ],
  },
  {
    title: "Profiles",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/ritesh-singh-d15/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Riteshsingh-D15",
      },
    ],
  },
  {
    title: "Navigation",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Education & Certifications",
        icon: null,
        link: "#education",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Riteshsingh-D15",
};

