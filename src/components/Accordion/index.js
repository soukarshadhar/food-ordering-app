import React, { useState } from "react";
import ChevronUpIcon from "../../../assets/chevron-up.svg";
import ChevronDownIcon from "../../../assets/chevron-down.svg";

export const Accordion = ({
  title = "",
  content = "",
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
      {canExpand && <div className="p-5">{content}</div>}
    </div>
  );
};

const AccordionWrapper = ({
  title,
  content,
  className,
  isInitialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isInitialOpen);

  const handleOnAccordionClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Accordion
      title={title}
      content={content}
      className={className}
      onAccordionClick={handleOnAccordionClick}
      canExpand={isOpen}
    />
  );
};

export default AccordionWrapper;
