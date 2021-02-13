import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HabitsControlScreen} from 'screens';
const Stack = createStackNavigator();

const HabitsRangePages = () => {
  return (
    <Stack.Navigator
      initialRouteName="habits-range-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="habits-range-index" component={HabitsControlScreen} />
    </Stack.Navigator>
  );
};

export default HabitsRangePages;
