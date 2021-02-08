import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import styles from './styles';
import Icon from 'components/base/icon';
import useSession from 'pkgs/session/hooks/useSession';
import CircleButton from 'components/buttons/circle-button';

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
          <CircleButton
            size="sm"
            icon="power-off"
            style={classes.icon}
            onPress={handleUserButton}
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
