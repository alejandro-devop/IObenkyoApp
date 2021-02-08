import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import HeaderAuthenticated from 'screens/layouts/components/header-authenticated';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import BaseLayout from 'screens/layouts/base-layout';

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
  return (
    <BaseLayout statusColor="light-content">
      <HeaderAuthenticated icon={icon} title={title} />
      <View style={classes.root}>{children}</View>
    </BaseLayout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default MainLayout;
