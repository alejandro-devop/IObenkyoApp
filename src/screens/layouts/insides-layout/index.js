import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import BaseLayout from 'screens/layouts/base-layout';
import HeaderEmpty from 'screens/layouts/components/header-empty';

const InsidesLayout = ({children, icon, title}) => {
  const classes = useStyles(styles);
  return (
    <BaseLayout statusColor="light-content">
      <HeaderEmpty icon={icon} title={title} />
      <View style={classes.root}>{children}</View>
    </BaseLayout>
  );
};

export default InsidesLayout;
