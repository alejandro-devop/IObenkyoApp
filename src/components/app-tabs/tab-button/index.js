import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Icon from 'components/base/icon';
import Text from 'components/base/text';

const TabButton = ({icon, label}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <TouchableOpacity style={classes.button}>
        <Icon name={icon} style={classes.icon} />
      </TouchableOpacity>
      <Text style={classes.label} variant="caption">
        {label}
      </Text>
    </View>
  );
};

export default TabButton;
