import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import styles from './styles';
import classNames from 'utils/classNames';

const FloatingButton = ({disabled, icon, onPress}) => {
  const Component = disabled ? View : TouchableOpacity;
  const classes = useStyles(styles);
  return (
    <Component onPress={onPress} style={classNames({root: true}, classes)}>
      <Icon name={icon} style={classes.icon} />
    </Component>
  );
};

export default FloatingButton;
