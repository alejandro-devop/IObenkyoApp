import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import styles from './styles';
import IconButton from 'components/buttons/icon-button';
import Icon from 'components/base/icon';
import useSession from 'pkgs/session/hooks/useSession';

const HeaderAuthenticated = ({icon, title}) => {
  const classes = useStyles(styles);
  const {clear} = useSession();
  const handleUserButton = () => {
    clear();
  };
  return (
    <SafeAreaView style={classes.safe}>
      <View style={classes.root}>
        <View style={classes.offset} />
        <View style={classes.titleWrapper}>
          {title && <Text style={classes.title}>{title}</Text>}
          {icon && <Icon name={icon} style={classes.titleIcon} />}
        </View>
        <View style={classes.buttonWrapper}>
          <IconButton
            icon="user-cog"
            style={classes.icon}
            onPress={handleUserButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderAuthenticated;
