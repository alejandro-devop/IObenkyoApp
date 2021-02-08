import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import Icon from 'components/base/icon';

const MenuOption = ({icon, label, onPress}) => {
  const classes = useStyles(styles);
  return (
    <TouchableOpacity onPress={onPress} style={classes.root}>
      {icon && <Icon name={icon} style={classes.icon} />}
      <Text style={classes.label} variant="subtitle">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuOption;
