import React from 'react';
import View from 'components/base/view';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import tabsConfig from 'config/tabs';
import TabButton from './tab-button';
import useNavigate from 'hooks/use-navigate';
import UserMenu from 'components/user-menu';

const AppTabs = ({state = {}}) => {
  const classes = useStyles(styles);
  const {routeNames = []} = state;
  const {navigation} = useNavigate();

  const handlePress = (path) => {
    navigation.navigate(path);
  };

  return (
    <>
      <View style={classes.wrapper} safe>
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
      </View>
      <UserMenu />
    </>
  );
};

export default AppTabs;
