import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
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
 * @param multiline
 * @param lines
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
const TextField = ({
  addOn,
  autoCapitalize = 'sentences',
  autoCompleteType,
  autoCorrect,
  autoFocus,
  blurOnSubmit,
  center,
  keyboardType,
  disabled,
  label,
  lines,
  maxLength,
  multiline,
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
      <View style={classes.inputControlWrapper}>
        {preOn ? <View style={classes.preOnWrapper}>{preOn()}</View> : null}
        {!onlyMask && (
          <TextInput
            multiline={multiline}
            numberOfLines={lines}
            autoCapitalize={autoCapitalize}
            autoCompleteType={autoCompleteType}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            blurOnSubmit={blurOnSubmit}
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
            style={[
              classNames(
                {
                  input: true,
                  inputCenter: center,
                  inputDisabled: disabled,
                  inputSecondary: secondary,
                },
                classes,
              ),
              multiline
                ? {
                    borderRadius: 20,
                    height: lines ? lines * 35 : null,
                  }
                : {},
            ]}
            value={value}
          />
        )}
        {onlyMask && (
          <TouchableOpacity
            onPress={onPress}
            style={classNames(
              {
                input: true,
                onlyMask: true,
                inputDisabled: disabled,
                inputSecondary: secondary,
              },
              classes,
            )}>
            <Text
              style={classNames(
                {valueText: true, valueTextCenter: center},
                classes,
              )}>
              {value}
            </Text>
          </TouchableOpacity>
        )}
        {addOn ? <View style={classes.addOnWrapper}>{addOn()}</View> : null}
      </View>
    </View>
  );
};

TextField.propTypes = {
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
  multiline: PropTypes.bool,
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

export default TextField;
