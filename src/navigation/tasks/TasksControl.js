import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TasksManageScreen} from 'screens';
const Stack = createStackNavigator();

const TasksControlPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="tasks-control-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="tasks-control-index" component={TasksManageScreen} />
    </Stack.Navigator>
  );
};

export default TasksControlPages;
