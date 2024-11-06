import React from "react";
const sizes = {
  text2xl: "text-[20px] font-medium sm:text-[17px]",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[20px] font-semibold sm:text-[17px]",
};
const Heading = ({ children, className, size = "headings", as, ...restProps }) => {
  const Component = as || "h6";
  return (
	<Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
	  {children}
	</Component>
  );
};

export { Heading };