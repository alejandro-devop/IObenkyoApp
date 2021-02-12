import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import classNames from 'utils/classNames';

/**
 * Component to render a checkbox field
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param checked
 * @param onPress
 * @param disabled
 * @param secondary
 * @returns {*}
 * @constructor
 */
const CheckboxField = ({checked, onPress, disabled, secondary}) => {
  const classes = useStyles(styles);
  const Wrapper = disabled ? View : TouchableOpacity;
  return (
    <Wrapper
      onPress={onPress}
      style={classNames(
        {
          root: true,
          rootSecondary: secondary,
        },
        classes,
      )}>
      {checked && (
        <Icon
          name="check"
          style={classNames({icon: true, iconSecondary: secondary}, classes)}
        />
      )}
    </Wrapper>
  );
};

CheckboxField.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  onPress: PropTypes.func,
};

export default CheckboxField;
