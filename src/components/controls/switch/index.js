import React, {useState} from 'react';
import {Switch as SwitchBase, View} from 'react-native';
import Text from 'components/base/text';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import palette from 'theme/palette';
import classNames from 'utils/classNames';

const Switch = ({label, name, onChange, success, value}) => {
  const classes = useStyles(styles);
  const [isEnabled, setIsEnabled] = useState(Boolean(value));
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
      {label && <Text style={classNames({label: true}, classes)}>{label}</Text>}
      <SwitchBase
        trackColor={{
          // false: '#FFF',
          true: !success
            ? palette.primaryTransparent
            : palette.successTransparent,
        }}
        // thumbColor={
        //   isEnabled ? (success ? palette.success : palette.primary) : '#FFF'
        // }
        ios_backgroundColor={palette.grayTransparent}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Switch;
