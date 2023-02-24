import "./About.css";
import React, { useState } from "react";

type Props = {
  name: string;
  jobTitle: string;
  descriptionShort: string;
  descriptionLong: string;

  imageSrc: string;
};

const About: React.FC<Props> = ({
  name,
  jobTitle,
  descriptionShort,
  descriptionLong,
  imageSrc,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="about">
      <div className="about-card">
        <img className="about-image" src={imageSrc} alt={name} />
        <div className="about-text">
          <h2 className="about-name">{name}</h2>
          <h3 className="about-title">{jobTitle}</h3>
          {expanded ? (
            <>
              <p className="about-description">{descriptionLong}</p>
              <button onClick={toggleExpanded}>See Less</button>
            </>
          ) : (
            <>
              <p className="about-description">{descriptionShort}</p>
              <button onClick={toggleExpanded}>See More</button>
            </>
          )}
        </div>
        <div className="about-socials">{/* social links */}</div>
      </div>
    </div>
  );
};

export default About;
