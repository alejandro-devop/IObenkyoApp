import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatsScreen} from 'screens';
const Stack = createStackNavigator();

const StatsPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="stats-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="stats-index" component={StatsScreen} />
    </Stack.Navigator>
  );
};

export default StatsPages;
