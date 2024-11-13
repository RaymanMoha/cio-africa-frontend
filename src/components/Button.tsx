import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ButtonVariant } from "../declarations/enums";

interface Props {
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: FC<Props> = ({ label, variant = ButtonVariant.Default, onClick = () => null }) => {
  const buttonClass = twMerge(
    "min-w-[152px] text-light px-[15px] py-[12px] rounded-[8px] font-[300] text-[16px] leading-[19.2px]",
    variant === ButtonVariant.Primary && "bg-primary",
    variant === ButtonVariant.Secondary && "bg-secondary text-light",
    variant === ButtonVariant.Default && "border border-[#1c1b21] text-darkest"
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
