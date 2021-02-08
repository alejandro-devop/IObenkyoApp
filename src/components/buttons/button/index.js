import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import classNames from 'utils/classNames';
import {useStyles} from 'theme/hooks';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({children, disabled, isLoading, onPress, secondary}) => {
  const classes = useStyles(styles);
  const Component = disabled || isLoading ? View : TouchableOpacity;
  return (
    <Component
      onPress={() => (!disabled && !isLoading && onPress ? onPress() : null)}
      style={classNames(
        {
          root: true,
          rootLoading: isLoading,
          rootSecondary: secondary,
          rootDisabled: disabled,
        },
        classes,
      )}>
      <Text
        style={classNames(
          {text: true, textLoading: isLoading, textDisabled: disabled},
          classes,
        )}>
        {children}
      </Text>
      {isLoading && <ActivityIndicator color="#FFF" />}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
