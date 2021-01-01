import React from 'react';
import PropTypes from 'prop-types';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import BaseLayout from 'screens/layouts/base-layout';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import imageBg from 'assets/backgrounds/background.jpg';
import styles from './styles';

/**
 * This component renders a layout specific for the landing view
 * @param children
 * @param statusColor
 * @returns {*}
 * @constructor
 */
const LandingLayout = ({children, statusColor = 'light-content'}) => {
  const classes = useStyles(styles);
  return (
    <BaseLayout statusColor={statusColor}>
      <ImageBackground source={imageBg} style={classes.image} />
      <View style={classes.root}>{children}</View>
    </BaseLayout>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
  statusColor: PropTypes.oneOf(['light-content', 'dark-content']),
};

export default LandingLayout;
