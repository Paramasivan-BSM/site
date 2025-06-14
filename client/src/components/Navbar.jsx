import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import generalStore from '../store/Genral.store';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Zustand state
  const { titlecard, navItems, actions, setTitlecard } = generalStore();

  // Icon mapper
  const iconMap = {
    WhatsApp: <WhatsAppIcon />,
    Email: <EmailIcon />,
    Phone: <LocalPhoneIcon />,
  };

  return (
    <>
      <nav className="bg-white shadow relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo + Title */}
            <div className="flex items-center space-x-2">
              <img src={titlecard.img} alt={titlecard.title} className="w-25 h-15 object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700">
              {navItems.map(({ title, img, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="hover:text-blue-600"
                  onClick={() => setTitlecard({ title, img })}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-1 px-2 pb-3">
              {navItems.map(({ title, img, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="block px-3 py-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  onClick={() => {
                    setTitlecard({ title, img });
                    setIsOpen(false);
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* SpeedDial */}
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 20 }}
        icon={<SupportAgentIcon />}
      >
{actions.map((action) => (
  <SpeedDialAction
    key={action.name}
    icon={iconMap[action.name]}
    tooltipTitle={action.name}
    onClick={() => {
      if (action.link) {
        window.open(action.link, '_blank');
      }
    }}
  />
))}


      </SpeedDial>
    </>
  );
}
