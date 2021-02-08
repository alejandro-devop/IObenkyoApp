import React from 'react';
import TextField from '../text-field';
import useToggle from 'hooks/use-toggle';

const PasswordField = ({
  label,
  labelLeft,
  name,
  onChange,
  placeholder,
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
      value={value}
    />
  );
};

export default PasswordField;
