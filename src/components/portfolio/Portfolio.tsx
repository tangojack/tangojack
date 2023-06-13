import React, { useState } from "react";
import PortfolioItem, {
  PortfolioItemProps,
} from "../portfolioItem/PortfolioItem";
import "./Portfolio.css";

type PortfolioProps = {
  items: PortfolioItemProps[];
};

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const tags = Array.from(new Set(items.flatMap((item) => item.tags)));

  const [selectedTags, setSelectedTags] = useState<string[]>(tags);
  const [filter, setFilter] = useState<"AND" | "OR">("OR");

  const handleTagClick = (tag: string) => {
    if (selectedTags.some((t) => t === tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredItems = items.filter((item) => {
    if (filter === "OR") {
      if (selectedTags.length === 0) {
        return false;
      } else {
        return selectedTags.some((tag) => item.tags.includes(tag));
      }
    } else {
      if (selectedTags.length === 0) {
        return false;
      } else {
        return selectedTags.every((tag) => item.tags.includes(tag));
      }
    }
  });

  return (
    <div className="portfolio">
      <div className="filters">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`badge ${selectedTags.some((t) => t === tag) ? "text-bg-primary" : "text-bg-light"}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        {/* <div>
          <label>
            <input
              type="radio"
              value="OR"
              checked={filter === "OR"}
              onChange={(e) => setFilter(e.target.value as "AND" | "OR")}
            />
            OR
          </label>
          <label>
            <input
              type="radio"
              value="AND"
              checked={filter === "AND"}
              onChange={(e) => setFilter(e.target.value as "AND" | "OR")}
            />
            AND
          </label>
        </div> */}
      </div>

      <div id="carousel" className="carousel slide">
        <div className="carousel-inner">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} id={index} url={item.url} title={item.title} description={item.description} imageSrc={item.imageSrc} tags={item.tags} />
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

