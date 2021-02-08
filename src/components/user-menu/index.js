import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Slide from 'components/anims/slide';
import IconButton from 'components/buttons/icon-button';
import UserAvatar from 'components/user-menu/avatar';
import MenuOption from 'components/user-menu/menu-option';
import useSession from 'pkgs/session/hooks/useSession';

/**
 * Renders the user main menu
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param width
 * @returns {null|*}
 * @constructor
 */
const UserMenu = ({width}) => {
  const classes = useStyles(styles);
  const {
    session: {openedMenu},
    set,
    clear,
  } = useSession();
  const handleCloseMenu = () => {
    set('openedMenu', false);
  };
  const handleLogout = () => {
    clear();
  };
  if (!openedMenu) {
    return null;
  }
  return (
    <View style={classes.root}>
      <TouchableOpacity
        onPress={handleCloseMenu}
        style={[classes.closeControl]}
      />
      <Slide direction="right" style={[classes.container, {width}]}>
        <SafeAreaView style={classes.safe}>
          <View style={classes.closeButtonWrapper}>
            <IconButton
              size="lg"
              icon="chevron-left"
              onPress={handleCloseMenu}
              classes={{root: classes.closeButton}}
            />
          </View>
          <UserAvatar />
          <View style={classes.optionsWrapper}>
            <MenuOption label="My habits" icon="brain" />
            <MenuOption label="Alerts" icon="bullhorn" />
            <MenuOption label="Alerts" icon="bullhorn" />
            <MenuOption label="Agenda" icon="calendar-alt" />
            <MenuOption label="Exit" icon="power-off" onPress={handleLogout} />
          </View>
        </SafeAreaView>
      </Slide>
    </View>
  );
};

UserMenu.defaultProps = {
  width: 280,
};

UserMenu.propTypes = {
  width: PropTypes.number,
};

export default UserMenu;
