import React from "react";
import ChevronUpIcon from "../../../assets/chevron-up.svg";
import ChevronDownIcon from "../../../assets/chevron-down.svg";

const Accordion = ({
  title = "",
  renderContent = () => {},
  className = "",
  onAccordionClick = () => {},
  canExpand = false,
}) => {
  return (
    <div
      data-testid="accordion"
      className={`border-slate-300 border${
        canExpand ? " bg-slate-50 " : " "
      }rounded-lg shadow ${className}`}
    >
      <div
        className={`p-5 flex justify-between cursor-pointer ${
          canExpand ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={onAccordionClick}
      >
        <span className="font-bold text-lg">{title}</span>
        <img
          className="h-7"
          src={canExpand ? ChevronUpIcon : ChevronDownIcon}
          alt="arrow-icon"
        />
      </div>
      {canExpand && <div className="p-5">{renderContent()}</div>}
    </div>
  );
};

export default Accordion;
