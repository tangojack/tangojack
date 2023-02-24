import React from "react";
import "./PortfolioItem.css";

export type PortfolioItemProps = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  description,
  imageSrc,
  tags,
}) => {
  return (
    <div className="portfolio-item">
      <img className="portfolio-item-image" src={imageSrc} alt={title} />
      <h3 className="portfolio-item-title">{title}</h3>
      <p className="portfolio-item-description">{description}</p>
      <ul className="portfolio-item-tags">
        {tags.map((tag, index) => (
          <li className="portfolio-item-tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioItem;
