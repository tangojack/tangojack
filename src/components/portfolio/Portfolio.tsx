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
    <div>
      <div>
        {tags.map((tag) => (
          <button
            key={tag}
            className={selectedTags.some((t) => t === tag) ? "selected" : ""}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        <div>
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
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
