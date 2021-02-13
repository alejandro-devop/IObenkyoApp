import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const RadioButton = ({
  checked,
  label,
  secondary,
  onChange,
  success,
  readOnly,
  danger,
  size = 'md',
}) => {
  const classes = useStyles(styles);
  const isSmall = size === 'sm';
  const Wrapper = !readOnly ? TouchableOpacity : View;
  return (
    <View style={classes.root}>
      {Boolean(label) && (
        <Text
          style={classNames({label: true, labelSecondary: secondary}, classes)}>
          {label}
        </Text>
      )}
      <Wrapper
        onPress={onChange}
        style={classNames(
          {
            control: true,
            controlSmall: isSmall,
            controlChecked: checked,
            controlCheckedSuccess: checked && success,
          },
          classes,
        )}>
        {Boolean(checked) && (
          <View
            style={classNames(
              {
                controlInner: true,
                controlInnerSecondary: secondary,
                controlInnerChecked: checked,
                controlInnerCheckedSuccess: checked && success,
                controlInnerCheckedDanger: checked && danger,
              },
              classes,
            )}
          />
        )}
      </Wrapper>
    </View>
  );
};

export default RadioButton;
