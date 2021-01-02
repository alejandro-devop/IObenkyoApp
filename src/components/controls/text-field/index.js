import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {TextInput} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import classNames from 'utils/classNames';
import palette from 'theme/palette';

/**
 * This component renders a text field which allows to capture text from the user
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param autoCapitalize
 * @param autoCompleteType
 * @param autoCorrect
 * @param autoFocus
 * @param keyboardType
 * @param disabled
 * @param label
 * @param maxLength
 * @param name
 * @param onBlur
 * @param onChange
 * @param onFocus
 * @param onSubmit
 * @param placeholder
 * @param returnKeyType
 * @param secure
 * @param secondary
 * @param value
 * @returns {*}
 * @constructor
 */
const TextField = ({
  autoCapitalize = 'sentences',
  autoCompleteType,
  autoCorrect,
  autoFocus,
  keyboardType,
  disabled,
  label,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onSubmit,
  placeholder,
  returnKeyType = 'done',
  secure,
  secondary,
  value,
}) => {
  const classes = useStyles(styles);
  const handleChange = (newValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: newValue,
        },
      });
    }
  };
  return (
    <View style={classes.inputWrapper}>
      {label && (
        <Text
          style={classNames(
            {label: true, labelSecondary: secondary, labelDisabled: disabled},
            classes,
          )}>
          {label}
        </Text>
      )}
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        editable={!disabled}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={!disabled ? palette.primary : palette.gray}
        onBlur={onBlur}
        onChangeText={(newValue) => handleChange(newValue)}
        onFocus={onFocus}
        onSubmitEditing={onSubmit}
        returnKeyType={returnKeyType}
        secureTextEntry={secure}
        style={classNames(
          {input: true, inputDisabled: disabled, inputSecondary: secondary},
          classes,
        )}
        value={value}
      />
    </View>
  );
};

TextField.propTypes = {
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
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
  secure: PropTypes.bool,
  secondary: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextField;
