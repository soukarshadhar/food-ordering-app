import React from "react";

const Card = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <div className="shimmer-card" key={i}>
        <div
          className="shimmer-image gray"
        />
        <div className="space gray" />
        <div className="space gray" />
        <div className="space gray" />
        <div className="space gray" />
        <div className="space gray" />
      </div>
    );
  }
  return items;
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Card()}
    </div>
  );
}

export default Shimmer;