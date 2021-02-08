import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const LinkButton = ({children, onPress}) => {
  const classes = useStyles(styles);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={classNames({text: true}, classes)}>{children}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
