import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import useSession from 'pkgs/session/hooks/useSession';
import CircleButton from 'components/buttons/circle-button';
import useNavigate from 'hooks/use-navigate';

/**
 * Renders an application bar special for logged user
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param icon
 * @param title
 * @returns {*}
 * @constructor
 */
const HeaderAuthenticated = ({icon, title}) => {
  const classes = useStyles(styles);
  const {
    session: {openedMenu},
    set,
  } = useSession();
  const {} = useNavigate();

  const handleToggleMenu = () => {
    set('openedMenu', !openedMenu);
  };

  const handleGoToConfig = () => {};

  return (
    <SafeAreaView style={classes.safe}>
      <View style={classes.root}>
        <CircleButton
          size="sm"
          icon="bars"
          style={classes.icon}
          onPress={handleToggleMenu}
        />
        <View style={classes.rightWrapper}>
          <CircleButton
            size="sm"
            icon="bell"
            style={classes.icon}
            onPress={handleGoToConfig}
          />
          <CircleButton
            size="sm"
            icon="cogs"
            style={classes.icon}
            onPress={handleGoToConfig}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

HeaderAuthenticated.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default HeaderAuthenticated;
