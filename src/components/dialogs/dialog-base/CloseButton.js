import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import CircleButton from 'components/buttons/circle-button';

const CloseButton = ({onPress}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <CircleButton onPress={onPress} primary icon="times" size="sm" />
    </View>
  );
};

const styles = () => ({
  root: {
    position: 'absolute',
    right: 0,
    transform: [{translateX: 20}, {translateY: -15}],
    zIndex: 100,
  },
});

export default CloseButton;
