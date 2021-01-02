import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import tabsConfig from 'config/tabs';
import TabButton from './tab-button';

const AppTabs = () => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      {tabsConfig.map((tab, key) => (
        <TabButton key={`tab-item-${key}`} label={tab.label} icon={tab.icon} />
      ))}
    </View>
  );
};

export default AppTabs;
