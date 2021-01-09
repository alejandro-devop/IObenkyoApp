import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/controls/text-field';

/**
 * This component renders a text field which allows to capture text from the user
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param addOn
 * @param autoCapitalize
 * @param autoCompleteType
 * @param autoCorrect
 * @param autoFocus
 * @param center
 * @param keyboardType
 * @param disabled
 * @param label
 * @param maxLength
 * @param name
 * @param onBlur
 * @param onChange
 * @param onPress
 * @param onFocus
 * @param onlyMask
 * @param onSubmit
 * @param placeholder
 * @param preOn
 * @param returnKeyType
 * @param secure
 * @param secondary
 * @param value
 * @returns {*}
 * @constructor
 */
const TextAreaField = ({
  addOn,
  autoCapitalize = 'sentences',
  autoCompleteType,
  autoCorrect,
  autoFocus,
  center,
  keyboardType,
  disabled,
  label,
  lines = 4,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onlyMask,
  onPress,
  onSubmit,
  placeholder,
  preOn,
  returnKeyType = 'done',
  secure,
  secondary,
  value,
}) => {
  return (
    <TextField
      addOn={addOn}
      autoCapitalize={autoCapitalize}
      autoCompleteType={autoCompleteType}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      center={center}
      keyboardType={keyboardType}
      disabled={disabled}
      label={label}
      maxLength={maxLength}
      multiline
      lines={lines}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      blurOnSubmit
      onlyMask={onlyMask}
      onPress={onPress}
      onSubmit={onSubmit}
      placeholder={placeholder}
      preOn={preOn}
      returnKeyType="done"
      secure={secure}
      secondary={secondary}
      value={value}
    />
  );
};

TextAreaField.propTypes = {
  addOn: PropTypes.func,
  autoCapitalize: PropTypes.oneOf(['sentences', 'characters', 'words', 'none']),
  autoCompleteType: PropTypes.oneOf([
    'off',
    'username',
    'password',
    'email',
    'name',
    'tel',
    'street-address',
    'postal-code',
    'cc-number',
    'cc-csc',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
  ]),
  autoFocus: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  label: PropTypes.string,
  lines: PropTypes.number,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onlyMask: PropTypes.bool,
  onPress: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  preOn: PropTypes.func,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
  secure: PropTypes.bool,
  secondary: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextAreaField;
