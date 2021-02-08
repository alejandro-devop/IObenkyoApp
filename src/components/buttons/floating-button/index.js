import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import styles from './styles';
import classNames from 'utils/classNames';
import Text from 'components/base/text';

const FloatingButton = ({disabled, icon, onPress, label}) => {
  const Component = disabled ? View : TouchableOpacity;
  const classes = useStyles(styles);
  return (
    <View style={classes.wrapper}>
      <Component onPress={onPress} style={classNames({root: true}, classes)}>
        <Icon name={icon} style={classes.icon} />
      </Component>
      {label && <Text>{label}</Text>}
    </View>
  );
};

export default FloatingButton;
