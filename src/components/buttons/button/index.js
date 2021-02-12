import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import classNames from 'utils/classNames';
import {useStyles} from 'theme/hooks';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Component to render all application buttons
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param children
 * @param disabled
 * @param isLoading
 * @param onPress
 * @param secondary
 * @returns {*}
 * @constructor
 */
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
      {isLoading && (
        <View style={classes.loader}>
          <ActivityIndicator color="#FFF" />
        </View>
      )}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  secondary: PropTypes.bool,
};

export default Button;
