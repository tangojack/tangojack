import React from "react";
import "./PortfolioItem.css";

export type PortfolioItemProps = {
  id: number;
  url: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  url,
  title,
  description,
  imageSrc,
  tags,
}) => {
  return (
    <a href={url} target="_blank">
      <div className={`carousel-item ${id === 0 ? "active" : ""}`}>
        <img src={imageSrc} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-block d-md-block">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
