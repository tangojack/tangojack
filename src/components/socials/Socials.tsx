import React from "react";
import "./Socials.css";

interface SocialsProps {
  instagramUrl: string;
  whatsappUrl: string;
}

const Socials: React.FC<SocialsProps> = ({ instagramUrl, whatsappUrl }) => {
  return (
    <div className="socials-container">
      <a
        className="social-link"
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="social-link"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Socials;
