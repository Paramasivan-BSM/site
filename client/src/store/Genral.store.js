import {create} from 'zustand';

// Carousel Images
import CADD1 from '../assets/Images/CADD1.jpg';
import CADD2 from '../assets/Images/CADD 2.jpg';
import CADD3 from '../assets/Images/CADD 3.jpg';
import CADD4 from '../assets/Images/CADD 4.jpg';

import LiveWire1 from '../assets/Images/LiveWire1.jpg';
import LiveWire2 from '../assets/Images/LiveWire2.jpg';
import LiveWire3 from '../assets/Images/LiveWire3.jpg';
import LiveWire4 from '../assets/Images/LiveWire4.jpg';

import Synergy1 from '../assets/Images/Synergys1.jpg';
import Synergy2 from '../assets/Images/Synergys2.jpg';

// Course Images

import MERN from '../assets/Images/Course Img/MERN.png';
import MEAN from '../assets/Images/Course Img/MEAN.jpg';
import SPRING from '../assets/Images/Course Img/spring boot.png';
import AI from '../assets/Images/Course Img/AI.jpg';
import DATA from '../assets/Images/Course Img/Data Science.jpg';
import AUTOCAD from '../assets/Images/Course Img/Autocad.jpg';
import PYTHON from '../assets/Images/Course Img/Python.png';
import FULLSTACK from '../assets/Images/Course Img/full stack.png';
import CLOUD from '../assets/Images/Course Img/cloud.png';



const generalStore = create((set) => ({
  // Active title card
  titlecard: {
    title: "CADD CENTRE",
    img: "https://caddcentre.com/assets/images/cadd_centre_logo.svg"
  },

  // All navigation items
  navItems: [
    {
      title: "CADD CENTRE",
      img: "https://caddcentre.com/assets/images/cadd_centre_logo.svg",
      label: "CaddCentre",
      path: "/",
    },
    {
      title: "LIVEWIRE",
      img: "https://livewireindia.com/assets/livewirelogo.png?v1.2",
      label: "Livewire",
      path: "/lw",
    },
    {
      title: "SYNERGY",
      img: "https://synergysbs.com/assets/synergy-logo.png",
      label: "Synergy",
      path: "/sy",
    },
  ],

  // Contact actions for SpeedDial
actions: [
  {
    icon: 'whatsapp',
    name: 'WhatsApp',
    link: 'https://wa.me/919894494442?text="Hello This is "',
  },
  {
    icon: 'email',
    name: 'Email',
    link: 'mailto:livewireform@gmail.com',
  },
  {
    icon: 'phone',
    name: 'Phone',
    link: 'tel:+919894494442',
  },
],

courses: [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Master MongoDB, Express, React, and Node.js for full-stack web apps.",
    image: MERN,
    syllabus: [
      "HTML, CSS, JavaScript",
      "React.js with Redux",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "REST APIs and JWT Authentication"
    ],
    tools: ["VS Code", "Postman", "MongoDB Compass", "GitHub", "Nodemon"],
    summary: "The MERN Stack course trains students to build powerful, dynamic, and modern web applications using JavaScript technologies."
  },
  {
    id: 2,
    title: "MEAN Stack Development",
    description: "Learn MongoDB, Express, Angular, and Node.js for modern web apps.",
    image: MEAN,
    syllabus: [
      "Angular Components & Services",
      "Node.js & Express Setup",
      "MongoDB Schemas & Models",
      "API Development & Integration",
      "JWT & User Authentication"
    ],
    tools: ["Angular CLI", "VS Code", "MongoDB Atlas", "Git", "Postman"],
    summary: "This course provides in-depth knowledge on Angular front-end combined with Node and MongoDB for scalable web solutions."
  },
  {
    id: 3,
    title: "Spring Boot with Java",
    description: "Enterprise app development using Spring Boot and Java backend.",
    image: SPRING,
    syllabus: [
      "Java OOP & Collections",
      "Spring Boot Setup & Annotations",
      "JPA with Hibernate",
      "RESTful APIs & Testing",
      "Spring Security & JWT"
    ],
    tools: ["IntelliJ IDEA", "Postman", "Maven", "MySQL", "Spring Tool Suite"],
    summary: "Spring Boot with Java is designed to build enterprise-grade backend systems with modern practices and security features."
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description: "Build smart systems with AI concepts and tools like Python, TensorFlow.",
    image: AI,
    syllabus: [
      "Python for AI",
      "Neural Networks & Deep Learning",
      "TensorFlow & Keras",
      "NLP & Computer Vision",
      "Model Deployment"
    ],
    tools: ["Jupyter Notebook", "TensorFlow", "OpenCV", "Google Colab", "Sci-kit Learn"],
    summary: "The AI course covers foundational to advanced machine learning and deep learning techniques to build intelligent applications."
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    description: "Data wrangling, visualization, ML models, using Python/R.",
    image: DATA,
    syllabus: [
      "Python for Data Analysis",
      "Pandas & Numpy",
      "Data Visualization with Matplotlib & Seaborn",
      "Machine Learning Basics",
      "Projects with Real Datasets"
    ],
    tools: ["JupyterLab", "RStudio", "Python", "Power BI", "Tableau"],
    summary: "Learn to analyze, visualize and interpret data trends using statistical and machine learning tools."
  },
  {
    id: 6,
    title: "AutoCAD Training",
    description: "Learn 2D/3D drafting and design using industry-standard AutoCAD tools.",
    image: AUTOCAD,
    syllabus: [
      "2D Drafting Fundamentals",
      "3D Modeling Basics",
      "Layer Management",
      "Plotting & Layouts",
      "Isometric Drawings"
    ],
    tools: ["AutoCAD", "DraftSight", "DWG TrueView"],
    summary: "Master AutoCAD for engineering, architectural, and civil drawing designs, ideal for both beginners and professionals."
  },
  {
    id: 7,
    title: "Python Programming",
    description: "From beginner to advanced scripting, OOP, and libraries.",
    image: PYTHON,
    syllabus: [
      "Python Syntax & Data Types",
      "Control Structures & Functions",
      "Object-Oriented Programming",
      "File Handling & Modules",
      "Libraries: NumPy, Pandas"
    ],
    tools: ["PyCharm", "Jupyter Notebook", "Anaconda", "IDLE"],
    summary: "This course equips you with Python programming skills suitable for web development, automation, and data science."
  },
  {
    id: 8,
    title: "Full Stack Web Development",
    description: "Complete front-end and back-end development bootcamp.",
    image: FULLSTACK,
    syllabus: [
      "HTML, CSS, JavaScript",
      "Front-End: React or Angular",
      "Back-End: Node.js/Java",
      "Database: MongoDB/MySQL",
      "Capstone Project"
    ],
    tools: ["VS Code", "Postman", "GitHub", "Docker", "MySQL Workbench"],
    summary: "An intensive bootcamp covering all layers of web development including front-end, back-end, and database connectivity."
  },
  {
    id: 9,
    title: "Cloud Computing Basics",
    description: "Understand AWS, Azure, and DevOps cloud fundamentals.",
    image: CLOUD,
    syllabus: [
      "Cloud Concepts & Services",
      "AWS EC2, S3, IAM",
      "Azure Fundamentals",
      "CI/CD with Jenkins",
      "Docker & Kubernetes Basics"
    ],
    tools: ["AWS Console", "Azure Portal", "Jenkins", "Git", "Docker"],
    summary: "Gain hands-on knowledge in cloud technologies and infrastructure automation, ideal for IT and devops beginners."
  }
],




ImageCarousel : (title)=>{

  switch(title){
    case "CADD CENTRE": 
    return [CADD1,CADD2,CADD3,CADD4];

    case "LIVEWIRE":
      return [LiveWire1,LiveWire2,LiveWire3,LiveWire4];

      case "SYNERGY" :
        return [Synergy1,Synergy2];
  }



},





  // Set title card dynamically
  setTitlecard: (newCard) => set({ titlecard: newCard }),
}));

export default generalStore;
