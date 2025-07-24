import { useState } from "react";
import { Star } from "./Star";
import "./star.css";
const NOS = 5;
const StarRating = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleClick = (i) => {
    setSelectedIndex(i);
  };

  return (
    <div className="container">
      <span className="title">Rating</span>
      {Array.from({ length: NOS }).map((_, i) => {
        let className = "";
        if (i <= selectedIndex) {
          className = "active";
        }
        if (
          i > selectedIndex &&
          i <= hoverIndex &&
          hoverIndex > selectedIndex
        ) {
          className += "hover";
        }
        return (
          <button
            onClick={() => handleClick(i)}
            className={className}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <Star />
            {hoverIndex}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
