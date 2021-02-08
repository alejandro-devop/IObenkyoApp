import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';

const Container = ({children, title}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      {title && (
        <View style={classes.titleWrapper}>
          <Text variant="title">{title}</Text>
        </View>
      )}
      {children}
    </View>
  );
};

export default Container;
