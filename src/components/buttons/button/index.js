import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import classNames from 'utils/classNames';
import {useStyles} from 'theme/hooks';
import styles from './styles';

const Button = ({children, disabled, isLoading, onPress}) => {
  const classes = useStyles(styles);
  const Component = disabled || isLoading ? View : TouchableOpacity;
  return (
    <Component
      onPress={() => (!disabled && !isLoading && onPress ? onPress() : null)}
      style={classNames(
        {root: true, rootLoading: isLoading, rootDisabled: disabled},
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

export default Button;
