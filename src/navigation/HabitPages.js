import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HabitsScreen, HabitsAddScreen} from 'screens';
const Stack = createStackNavigator();

const HabitPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="add-habit"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="add-habit" component={HabitsAddScreen} />
    </Stack.Navigator>
  );
};

export default HabitPages;
