import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import styles from './styles';
import classNames from 'utils/classNames';
import Text from 'components/base/text';

const FloatingButton = ({
  classes: otherClasses = {},
  disabled,
  icon,
  onPress,
  label,
  secondary,
  success,
  style,
}) => {
  const Component = disabled ? View : TouchableOpacity;
  const classes = useStyles(styles);
  return (
    <View style={[classes.wrapper, style]}>
      <Component
        onPress={onPress}
        style={[
          classNames(
            {
              root: true,
              rootSecondary: secondary,
              rootSuccess: success,
            },
            classes,
          ),
          otherClasses.root,
        ]}>
        <Icon name={icon} style={[classes.icon, otherClasses.icon]} />
      </Component>
      {label && <Text>{label}</Text>}
    </View>
  );
};

export default FloatingButton;
