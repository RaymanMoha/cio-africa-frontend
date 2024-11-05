import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
  round: 'rounded-lg',
};

const variants = {
  outline: {},
  gray_988: 'border-gray-968 border border-solid text-gray-960',
  fill: {
    red_A788: 'bg-red-a788 text-gray-58',
    white_A788: 'bg-white-a700',
  },
};

const sizes = {
  md: 'h-[58px] px-[34px] text-[16px]',
  sm: 'h-[42px] px-3.5 text-[16px]',
  xs: 'h-[38px] px-1.5',
};

const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = 'round',
  variant = 'fill',
  size = 'xs',
  color = 'white_A788',
  ...restProps
}) => {
  return (
    <button
      className={`${
        className
      } flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant && variants[variant]?.[color]
      }`}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['md', 'sm', 'xs']),
  variant: PropTypes.oneOf(['outline', 'fill']),
  color: PropTypes.oneOf(['gray_988', 'red_A788', 'white_A788']),
};

export { Button };
