import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../text-field';
import useToggle from 'hooks/use-toggle';

const PasswordField = ({
  label,
  labelLeft,
  name,
  onChange,
  placeholder,
  secondary,
  value,
}) => {
  const [isVisible] = useToggle();
  return (
    <TextField
      autoCapitalize="none"
      secureTextEntry={!isVisible}
      label={label}
      labelLeft={labelLeft}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      secure
      secondary={secondary}
      value={value}
    />
  );
};

PasswordField.propTypes = {
  /**
   * The label used
   */
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
};

export default PasswordField;
