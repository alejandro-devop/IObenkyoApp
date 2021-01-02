import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import styles from './styles';
import IconButton from 'components/buttons/icon-button';
import Icon from 'components/base/icon';
import useNavigate from 'hooks/use-navigate';

const HeaderEmpty = ({icon, title}) => {
  const classes = useStyles(styles);
  const {canGoBack, goBack} = useNavigate();
  return (
    <SafeAreaView style={classes.safe}>
      <View style={classes.root}>
        {canGoBack && <IconButton onPress={goBack} icon={'arrow-left'} />}
        <View style={classes.titleWrapper}>
          {title && <Text style={classes.title}>{title}</Text>}
          {icon && <Icon name={icon} style={classes.titleIcon} />}
        </View>
        <View style={classes.offset} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderEmpty;
