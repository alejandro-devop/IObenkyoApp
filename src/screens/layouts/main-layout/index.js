import React from 'react';
import {View} from 'react-native';
import HeaderAuthenticated from 'screens/layouts/components/header-authenticated';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import BaseLayout from 'screens/layouts/base-layout';

const MainLayout = ({children, icon, title}) => {
  const classes = useStyles(styles);
  return (
    <BaseLayout statusColor="light-content">
      <HeaderAuthenticated icon={icon} title={title} />
      <View style={classes.root}>{children}</View>
    </BaseLayout>
  );
};

export default MainLayout;
