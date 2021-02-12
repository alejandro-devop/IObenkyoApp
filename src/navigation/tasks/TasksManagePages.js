import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TasksManageScreen} from 'screens';
const Stack = createStackNavigator();

const TasksManagePages = () => {
  return (
    <Stack.Navigator
      initialRouteName="manage-tasks-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="manage-tasks-index" component={TasksManageScreen} />
    </Stack.Navigator>
  );
};

export default TasksManagePages;
