import React from "react";

const Shimmer = () => {
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push(
      <div key={i}>
        <div className="h-[150px] object-cover w-full rounded-2xl bg-slate-200" />
        <div className="h-[24px] mt-4 bg-slate-200" />
        <div className="h-[24px] w-[120px] mt-2 bg-slate-200" />
        <div className="h-[24px] w-[93px] mt-2 bg-slate-200" />
        <div className="h-[24px] w-[80px] mt-2 bg-slate-200" />
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-8 mt-5"
      data-testid="shimmer-container"
    >
      {items}
    </div>
  );
};

export default Shimmer;
