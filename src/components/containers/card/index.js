import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';

const Card = ({children, style}) => {
  const classes = useStyles(styles);
  return <View style={[classes.root, style]}>{children}</View>;
};

export default Card;
