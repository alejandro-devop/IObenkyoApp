import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ImageBackground, View} from 'react-native';
import HeaderAuthenticated from 'screens/layouts/components/header-authenticated';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import BaseLayout from 'screens/layouts/base-layout';
import imageBg from 'assets/backgrounds/pattern-black.png';

/**
 * Renders a layout for main screens
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param children
 * @param icon
 * @param title
 * @returns {*}
 * @constructor
 */
const MainLayout = ({children, icon, title}) => {
  const classes = useStyles(styles);
  const [loaded, setLoaded] = useState(false);
  return (
    <BaseLayout statusColor="light-content">
      <HeaderAuthenticated icon={icon} title={title} />
      {!loaded && <View style={[classes.image, classes.overlay]} />}
      <ImageBackground
        onLoad={() => setLoaded(true)}
        source={imageBg}
        style={classes.image}
      />
      <View style={classes.root}>{children}</View>
    </BaseLayout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(MainLayout);
