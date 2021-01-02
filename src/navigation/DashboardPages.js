import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from 'screens';
import AppTabs from 'components/app-tabs';

const Tab = createBottomTabNavigator();

const DashboardPages = () => {
  return (
    <Tab.Navigator
      initialRouteName={'dashboard'}
      tabBar={({state, descriptors, navigation}) => (
        <AppTabs
          descriptors={descriptors}
          navigation={navigation}
          state={state}
        />
      )}>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default DashboardPages;
