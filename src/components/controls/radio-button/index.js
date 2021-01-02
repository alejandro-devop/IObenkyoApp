import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const RadioButton = ({checked, label, secondary, onChange}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <Text
        style={classNames({label: true, labelSecondary: secondary}, classes)}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={onChange}
        style={classNames({control: true, controlChecked: checked}, classes)}>
        {checked && (
          <View
            style={classNames(
              {controlInner: true, controlInnerChecked: checked},
              classes,
            )}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
