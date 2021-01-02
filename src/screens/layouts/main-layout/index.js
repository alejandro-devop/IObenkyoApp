import React from 'react';
import {View} from 'react-native';
import HeaderAuthenticated from 'screens/layouts/components/header-authenticated';
import {useStyles} from 'theme/hooks';
import styles from './styles';

const MainLayout = ({children}) => {
  const classes = useStyles(styles);
  return (
    <>
      <HeaderAuthenticated />
      <View style={classes.root}>{children}</View>
    </>
  );
};

export default MainLayout;
