import React from 'react';
import PropTypes from 'prop-types';

function ChipView(props) {
  const {
    options = defaultList,
    children,
    ...restProps
  } = props;

  const deleteAction = (value) => (event) => {
    event.preventDefault();
    // Assuming `setValues` is defined in the component's scope
    setValues((prevValues) => prevValues.filter((option) => option.value !== value));
  };

  const toggle = (value) => (event) => {
    event.preventDefault();
    getValue(() => {
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];

      return options
        .filter((option) => newValues.includes(option.value))
        .map((option) => option.value);
    });
  };

  React.useEffect(() => {
    if (value.every((val) => options.find((option) => option.value === val))) {
      return values;
    }
    return options
      .filter((option) => values.includes(option.value))
      .map((option) => option.value);
  }, [options]);

  const renderChildren = (option) => {
    return children({
      label: option.label,
      isSelected: values.includes(option.value),
      toggle: toggle(option.value),
      deleteAction: deleteAction(option),
    });
  };

  Chip.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    value: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  };

  return (
    <div {...restProps}>
      {options.map(renderChildren)}
    </div>
  );
}

export { ChipView };
