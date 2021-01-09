import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'components/base/icon';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import {isEmpty} from 'utils';
import classNames from 'utils/classNames';

const CircleButton = ({
  danger,
  icon,
  label,
  onPress,
  primary,
  success,
  size = 'md',
}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <TouchableOpacity
        onPress={onPress}
        style={classNames(
          {
            buttonWrapper: true,
            buttonWrapperSM: size === 'sm',
            buttonWrapperPrimary: primary,
            buttonWrapperDanger: danger,
            buttonWrapperSuccess: success,
          },
          classes,
        )}>
        <Icon
          name={icon}
          style={classNames(
            {
              icon: true,
              iconSM: size === 'sm',
            },
            classes,
          )}
        />
      </TouchableOpacity>
      {!isEmpty(label) && (
        <Text variant="caption" style={classes.label}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default CircleButton;
