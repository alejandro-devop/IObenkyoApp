import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardPages from './DashboardPages';
import {HabitsAddScreen, HabitViewScreen} from 'screens';
import TestAreaPages from 'navigation/TestAreaPages';
const Stack = createStackNavigator();

const AuthenticationPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'dashboard-pages'}>
      <Stack.Screen name="testing-hall" component={TestAreaPages} />
      <Stack.Screen name="dashboard-pages" component={DashboardPages} />
      <Stack.Screen name="add-habit" component={HabitsAddScreen} />
      <Stack.Screen name="view-habit" component={HabitViewScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationPages;
