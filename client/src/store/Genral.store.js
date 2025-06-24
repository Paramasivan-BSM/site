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
    },
    {
      id: 2,
      title: "MEAN Stack Development",
      description: "Learn MongoDB, Express, Angular, and Node.js for modern web apps.",
      image: MEAN,
    },
    {
      id: 3,
      title: "Spring Boot with Java",
      description: "Enterprise app development using Spring Boot and Java backend.",
      image: SPRING,
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      description: "Build smart systems with AI concepts and tools like Python, TensorFlow.",
      image: AI,
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      description: "Data wrangling, visualization, ML models, using Python/R.",
      image: DATA,
    },
    {
      id: 6,
      title: "AutoCAD Training",
      description: "Learn 2D/3D drafting and design using industry-standard AutoCAD tools.",
      image: AUTOCAD,
    },
    {
      id: 7,
      title: "Python Programming",
      description: "From beginner to advanced scripting, OOP, and libraries.",
      image: PYTHON,
    },
    {
      id: 8,
      title: "Full Stack Web Development",
      description: "Complete front-end and back-end development bootcamp.",
      image: FULLSTACK,
    },
    {
      id: 9,
      title: "Cloud Computing Basics",
      description: "Understand AWS, Azure, and DevOps cloud fundamentals.",
      image: CLOUD,
    },
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
