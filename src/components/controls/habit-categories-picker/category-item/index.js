import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import Icon from 'components/base/icon';
import classNames from 'utils/classNames';

const CategoryItem = ({item, onPress, selected}) => {
  const classes = useStyles(styles);
  const {name, icon} = item;
  return (
    <TouchableOpacity
      style={classNames({root: true, rootSelected: selected}, classes)}
      onPress={onPress}>
      <View
        style={classNames(
          {iconWrapper: true, iconWrapperSelected: selected},
          classes,
        )}>
        <Icon name={icon} style={classes.icon} />
      </View>
      <View style={classes.textWrapper}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
