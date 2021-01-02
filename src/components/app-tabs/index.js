import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import tabsConfig from 'config/tabs';
import TabButton from './tab-button';
import useNavigate from 'hooks/use-navigate';

const AppTabs = ({state = {}}) => {
  const classes = useStyles(styles);
  const {routeNames = []} = state;
  const {navigation} = useNavigate();

  const handlePress = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={classes.root}>
      {tabsConfig.map((tab, key) => (
        <TabButton
          key={`tab-item-${key}`}
          label={tab.label}
          icon={tab.icon}
          path={tab.path}
          selected={tab.path === routeNames[state.index]}
          onPress={handlePress}
        />
      ))}
    </View>
  );
};

export default AppTabs;
