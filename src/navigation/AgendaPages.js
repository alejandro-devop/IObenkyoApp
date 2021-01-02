import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AgendaScreen} from 'screens';
const Stack = createStackNavigator();

const AgendaPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="agenda-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="agenda-index" component={AgendaScreen} />
    </Stack.Navigator>
  );
};

export default AgendaPages;
