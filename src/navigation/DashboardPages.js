import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from 'screens';
import AgendaPages from 'navigation/AgendaPages';
import AlertPages from 'navigation/AlertPages';
import HabitPages from 'navigation/HabitPages';
import StatsPages from 'navigation/StatsPages';
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
      <Tab.Screen name="agenda" component={AgendaPages} />
      <Tab.Screen name="alerts" component={AlertPages} />
      <Tab.Screen name="stats" component={StatsPages} />
      <Tab.Screen name="habits" component={HabitPages} />
    </Tab.Navigator>
  );
};

export default DashboardPages;
