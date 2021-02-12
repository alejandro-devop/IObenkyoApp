import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HabitsManageScreen} from 'screens';
const Stack = createStackNavigator();

const AddHabitPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="manage-habits-index-2"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="manage-habits-index-2"
        component={HabitsManageScreen}
      />
    </Stack.Navigator>
  );
};

export default AddHabitPages;
