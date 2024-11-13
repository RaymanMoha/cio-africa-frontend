import React, { FC, ReactNode } from "react";
import { ReactComponent as ChevronDownIcon } from "../assets/images/downward-arrow.svg";

interface DropdownProps {
  icon?: ReactNode;
  label?: string;
}

const Dropdown: FC<DropdownProps> = ({ icon, label }) => {
  return (
    <div className="relative inline-block">
      <button className="flex items-center gap-1">
        {label && (
          <span className="font-light text-base">
            {label}
          </span>
        )}
        {icon && icon}
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default Dropdown;
