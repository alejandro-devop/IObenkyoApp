import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'components/base/icon';
import styles from './styles';
import {useStyles} from 'theme/hooks';

const IconButton = ({disabled, icon, onPress, style}) => {
  const Component = !disabled ? TouchableOpacity : View;
  const classes = useStyles(styles);

  return (
    <Component
      onPress={() => (!disabled && onPress ? onPress() : null)}
      style={classes.root}>
      <Icon name={icon} style={[classes.icon, style]} />
    </Component>
  );
};

export default IconButton;
