import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import Icon from 'components/base/icon';
import Text from 'components/base/text';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import classNames from 'utils/classNames';

const IconButton = ({
  classes: otherClasses = {},
  disabled,
  icon,
  isLoading,
  onPress,
  label,
  secondary,
  size = 'md',
  style,
}) => {
  const Component = disabled || isLoading ? View : TouchableOpacity;
  const classes = useStyles(styles);
  const isSM = size === 'sm';
  const isLG = size === 'lg';
  return (
    <View style={classes.wrapper}>
      <Component
        onPress={() => (!disabled && onPress ? onPress() : null)}
        style={[
          classNames(
            {
              root: true,
              rootDisabled: disabled,
              rootSecondary: secondary,
              rootSM: isSM,
              rootLG: isLG,
            },
            classes,
          ),
          otherClasses.root,
        ]}>
        {!isLoading ? (
          <Icon
            name={icon}
            style={[
              classNames({icon: true, iconSM: isSM, iconLG: isLG}, classes),
              style,
            ]}
          />
        ) : (
          <ActivityIndicator color={'#FFF'} />
        )}
      </Component>
      {label && <Text>{label}</Text>}
    </View>
  );
};

export default IconButton;
