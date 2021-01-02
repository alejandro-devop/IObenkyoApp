import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import classNames from 'utils/classNames';
import {useStyles} from 'theme/hooks';
import styles from './styles';

const Button = ({children, disabled}) => {
  const classes = useStyles(styles);
  const Component = disabled ? View : TouchableOpacity;
  return (
    <Component
      style={classNames({root: true, rootDisabled: disabled}, classes)}>
      <Text style={classNames({text: true, textDisabled: disabled}, classes)}>
        {children}
      </Text>
    </Component>
  );
};

export default Button;
