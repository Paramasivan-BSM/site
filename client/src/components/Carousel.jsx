import React, { useState, useEffect } from "react";


import generalStore from "../store/Genral.store";

// const images = [
//   "https://livewireindia.com/assets/banner/full-stack.jpg",
//   "https://livewireindia.com/assets/banner/data-science.jpg",
//   "https://livewireindia.com/assets/banner/data-science.jpg",
// ];



 
 


export default function FullWidthCarousel() {

  
 const { titlecard,ImageCarousel } = generalStore();



let images = ImageCarousel(titlecard.title)

 






 
   




   

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full h-[60vh] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
