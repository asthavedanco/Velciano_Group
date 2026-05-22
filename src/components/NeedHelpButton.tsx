"use client";

import { useState, useEffect } from "react";

export default function NeedHelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the floating menu when clicking outside of the container
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".floating-help-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`floating-help-container ${isOpen ? "open" : ""}`}>
      {/* Main Trigger Button */}
      <button 
        className="floating-help-btn floating-help-trigger" 
        onClick={toggleMenu}
        aria-label="Need Help Menu"
        aria-expanded={isOpen}
      >
        <div className="icon-wrapper">
          {/* Comments speech bubble icon for closed state */}
          <i className="fa-regular fa-comments trigger-icon icon-help"></i>
          {/* Close standard cross '✕' icon for open state */}
          <i className="fa-solid fa-xmark trigger-icon icon-close"></i>
        </div>
        <span className="btn-tooltip">Need Help?</span>
      </button>

      {/* WhatsApp Button (Green) */}
      <a 
        href="https://wa.me/918609373737?text=Hi%20Velciano%20Group,%20I'm%20interested%20in%20your%20products." 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-help-btn floating-help-option whatsapp-btn"
        aria-label="Chat on WhatsApp"
        onClick={() => setIsOpen(false)} // Close menu on click
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="btn-tooltip">Chat on WhatsApp</span>
      </a>

      {/* LinkedIn Button (Blue) */}
      <a 
        href="https://www.linkedin.com/in/vansh-chug-velciano-bedsheets-flatbedsheet-hotellinen-cottonbedsheets-printedbedsheets-duvetcover/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-help-btn floating-help-option linkedin-btn"
        aria-label="Connect on LinkedIn"
        onClick={() => setIsOpen(false)} // Close menu on click
      >
        <i className="fa-brands fa-linkedin-in"></i>
        <span className="btn-tooltip">Connect on LinkedIn</span>
      </a>
    </div>
  );
}
