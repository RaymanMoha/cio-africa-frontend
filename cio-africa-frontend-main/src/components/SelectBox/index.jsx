import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const sizes = {
  xs: "h-[18px] px-3",
};

const SelectBox = ({
  children,
  className,
  options = [],
  isSearchable = false,
  isMulti = false,
  indicator,
  shape,
  size = "xs",
  ...restProps
}) => {
  return (
	<>
	  <Select
		options={options}
		className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]}`}
		isSearchable={isSearchable}
		isMulti={isMulti}
		components={{
		  IndicatorSeparator: () => null,
		  ...(indicator && { DropdownIndicator: () => indicator }),
		}}
		styles={{
		  indicatorsContainer: (provided) => ({
			...provided,
			padding: undefined,
			flexShrink: undefined,
			width: "max-content",
		  }),
		  "&> div": { padding: 0 },
		  container: (provided) => ({
			...provided,
			zIndex: 0,
			alignItems: "center",
		  }),
		  control: (provided) => ({
			...provided,
			backgroundColor: "transparent",
			border: "0 !important",
			boxShadow: "none !important",
			minHeight: "auto",
			width: "100%",
			flexWrap: undefined,
			"&:hover": {
			  border: "> !important",
			},
		  }),
		  input: (provided) => ({
			...provided,
			color: "inherit",
		  }),
		  option: (provided, state) => ({
			...provided,
			display: "flex",
			minWidth: "max-content",
			width: "100%",
			backgroundColor: state.isSelected ? "#ff0000" : "transparent",
			color: state.isSelected ? "#f9f9f9" : "inherit",
			"&:hover": {
			  backgroundColor: "#ff0000",
			  color: "#f9f9f9",
			},
		  }),
		  singleValue: (provided) => ({
			...provided,
			display: "flex",
			marginLeft: undefined,
			marginRight: undefined,
		  }),
		  valueContainer: (provided) => ({
			...provided,
			padding: 0,
			display: "flex",
			flexWrap: undefined,
		  }),
		  placeholder: (provided) => ({
			...provided,
			margin: 0,
		  }),
		}}
		{...restProps}
	  >
		{children}
	  </Select>
	</>
  );
};

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
};

export { SelectBox };