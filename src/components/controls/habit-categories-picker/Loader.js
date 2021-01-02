import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';

const Loader = () => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      {_.times(3, (key) => (
        <View key={`loader-key-${key}`} style={classes.loaderItem} />
      ))}
    </View>
  );
};

const styles = ({palette = {}}) => ({
  loaderItem: {
    backgroundColor: palette.secondaryTransparent,
    borderRadius: 20,
    width: 120,
    height: 40,
    marginRight: 10,
  },
  root: {
    flexDirection: 'row',
  },
});

export default Loader;
