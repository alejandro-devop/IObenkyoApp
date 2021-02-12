import React from 'react';
import {View} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {useStyles} from 'theme/hooks';
import styles from './styles';

const JSOND = ({data}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <JSONTree data={data} />
    </View>
  );
};

export default JSOND;
