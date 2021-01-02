import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HabitsScreen} from 'screens';
const Stack = createStackNavigator();

const HabitPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="habits-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="habits-index" component={HabitsScreen} />
    </Stack.Navigator>
  );
};

export default HabitPages;
