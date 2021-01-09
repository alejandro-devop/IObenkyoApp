import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import Text from 'components/base/text';
import styles from './styles';
import {isEmpty} from 'utils';
import classNames from 'utils/classNames';

const InfoRow = ({title, icon, ifNotEmpty, horizontal, value}) => {
  const classes = useStyles(styles);
  if (ifNotEmpty && isEmpty(value)) {
    return null;
  }
  return (
    <View style={classes.root}>
      {!isEmpty(icon) && (
        <View style={classes.iconWrapper}>
          <Icon name={icon} style={classes.icon} />
        </View>
      )}
      <View
        style={classNames(
          {content: true, contentHorizontal: horizontal},
          classes,
        )}>
        {!isEmpty(title) && <Text style={classes.title}>{title}</Text>}
        {!isEmpty(value) && (
          <Text style={classes.value} variant="caption">
            {value}
          </Text>
        )}
      </View>
    </View>
  );
};

export default InfoRow;
