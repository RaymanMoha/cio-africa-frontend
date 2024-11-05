import React from "react";

const sizes = {
textxs: "text-[12px] font-normal not-italic", texts: "text-[14px] font-normal not-italic",
textmd: "text-[15px] font-normal not-italic",
textlg: "text-[16px] font-normal not-italic sm:text-[13px]",
textxl: "text-[18px] font-normal not-italic sm:text-[15px]",
text3xl: "text-[40px] font-normal not-italic lg:text-[40px] md:text-[38px] sm:text-[34px]", };
const Text = ({ children, className = as, size = "texts", ...restProps }) => {
  const Component = as || "p";
  return (
	<Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
	  {children}
	</Component>
  );
};
export { Text };