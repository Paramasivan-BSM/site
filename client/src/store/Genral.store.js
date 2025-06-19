import {create} from 'zustand';
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
