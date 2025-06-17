import {create} from 'zustand';

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
    return ["https://caddcentre.com/assets/images/banner/home/ai-powerup-product-design.jpg","https://caddcentre.com/assets/images/banner/home/ai-powerup-smart-building.jpg"];

    case "LIVEWIRE":
      return ["https://livewireindia.com/assets/banner/full-stack.jpg"];

      case "SYNERGY" :
        return ["https://livewireindia.com/assets/banner/data-science.jpg"];
  }



},





  // Set title card dynamically
  setTitlecard: (newCard) => set({ titlecard: newCard }),
}));

export default generalStore;
