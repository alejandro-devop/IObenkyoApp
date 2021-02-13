import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';

const EmptyMessage = ({message}) => {
  const classes = useStyles(styles);
  return (
    <View style={classes.wrapper}>
      <Text style={classes.text} variant="paragraph">
        {message}
      </Text>
    </View>
  );
};

export default EmptyMessage;
