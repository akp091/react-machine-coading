// star.jsx or star.js
import React from "react";

export function Star() {
  return (
    <svg
      //   xmlns="http://www.w3.org/2000/svg"
      className="star"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gold"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 9 12 2" />
    </svg>
  );
}
