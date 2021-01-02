import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Icon from 'components/base/icon';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const TabButton = ({icon, label, path, onPress, selected}) => {
  const classes = useStyles(styles);
  const handleOnPress = () => {
    if (onPress) {
      onPress(path);
    }
  };
  return (
    <View style={classes.root}>
      <TouchableOpacity
        style={classNames({button: true, buttonSelected: selected}, classes)}
        onPress={handleOnPress}>
        <Icon name={icon} style={classes.icon} />
      </TouchableOpacity>
      <Text style={classes.label} variant="caption">
        {label}
      </Text>
    </View>
  );
};

export default TabButton;
