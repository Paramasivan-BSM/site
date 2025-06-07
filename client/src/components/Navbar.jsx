import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [titlecard, setTitlecard] = useState({
    title: "CADD CENTRE",
    img: "https://caddcentre.com/assets/images/cadd_centre_logo.svg"
  });

  const navItems = [
    {
      title: "CADD CENTRE",
      img: "https://caddcentre.com/assets/images/cadd_centre_logo.svg",
      label: "CaddCentre"
    },
    {
      title: "LIVEWIRE",
      img: "https://livewireindia.com/assets/livewirelogo.png?v1.2",
      label: "Livewire"
    },
    {
      title: "SYNERGY",
      img: "https://synergysbs.com/assets/synergy-logo.png",
      label: "Synergy"
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img src={titlecard.img} alt={titlecard.title} className="w-25 h-15 object-contain" />
            {/* <span className="font-bold text-xl text-gray-800">{titlecard.title}</span> */}
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            {navItems.map(({ title, img, label }) => (
              <Link
                key={label}
                to="#"
                className="hover:text-blue-600"
                onClick={() => setTitlecard({ title, img })}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Enquiry Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 px-2 pb-3">
            {navItems.map(({ title, img, label }) => (
              <Link
                key={label}
                to="#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                onClick={() => {
                  setTitlecard({ title, img });
                  setIsOpen(false); // close menu after click
                }}
              >
                {label}
              </Link>
            ))}
            <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm">
              Enquiry Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
