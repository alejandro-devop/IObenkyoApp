import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const RadioButton = ({checked, label, secondary, onChange, size = 'md'}) => {
  const classes = useStyles(styles);
  const isSmall = size === 'sm';
  return (
    <View style={classes.root}>
      {label && (
        <Text
          style={classNames({label: true, labelSecondary: secondary}, classes)}>
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={onChange}
        style={classNames(
          {control: true, controlSmall: isSmall, controlChecked: checked},
          classes,
        )}>
        {checked && (
          <View
            style={classNames(
              {
                controlInner: true,
                controlInnerSecondary: secondary,
                controlInnerChecked: checked,
              },
              classes,
            )}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
