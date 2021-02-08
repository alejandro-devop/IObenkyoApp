import React from 'react';
import {Image, View} from 'react-native';
import avatar from 'assets/avatars/avatar.png';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import useSession from 'pkgs/session/hooks/useSession';

const UserAvatar = () => {
  const classes = useStyles(styles);
  const {
    session: {user = {}},
  } = useSession();
  return (
    <View style={classes.root}>
      <Image source={avatar} style={classes.image} />
      <Text variant="subtitle" style={classes.text}>{user.name}</Text>
    </View>
  );
};

export default UserAvatar;
