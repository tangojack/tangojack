import React from "react";
import { useParams } from "react-router-dom";
import PortfolioItem, {
  PortfolioItemProps,
} from "../portfolioItem/PortfolioItem";

type PortfolioItemDetailProps = {
  items: PortfolioItemProps[];
};

const PortfolioItemDetail: React.FC<PortfolioItemDetailProps> = ({ items }) => {
  const { itemId = "" } = useParams<{ itemId?: string }>();
  const selectedItem = items.find((item) => item.id === parseInt(itemId));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="portfolio-item-detail">
      <PortfolioItem {...selectedItem} />
    </div>
  );
};

export default PortfolioItemDetail;
