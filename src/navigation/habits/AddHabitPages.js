import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HabitsAddScreen} from 'screens';
const Stack = createStackNavigator();

const AddHabitPages = () => {
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

export default AddHabitPages;
