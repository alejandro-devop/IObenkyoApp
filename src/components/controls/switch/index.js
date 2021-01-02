import React, {useState} from 'react';
import {Switch as SwitchBase, View} from 'react-native';
import Text from 'components/base/text';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import palette from 'theme/palette';
import classNames from 'utils/classNames';

const Switch = ({label, name, onChange, secondary, value = false}) => {
  const classes = useStyles(styles);
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (onChange) {
      onChange({
        target: {
          name,
          value: !isEnabled,
        },
      });
    }
  };

  return (
    <View style={classes.root}>
      {label && (
        <Text
          style={classNames({label: true, labelSecondary: secondary}, classes)}>
          {label}
        </Text>
      )}
      <SwitchBase
        trackColor={{
          false: palette.secondary,
          true: palette.primaryTransparent,
        }}
        thumbColor={isEnabled ? palette.primary : '#FFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Switch;
