import React from 'react';
import {View} from 'react-native';
import MainLayout from 'screens/layouts/main-layout';
import Text from 'components/base/text';

const HabitsScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>Habits</Text>
      </View>
    </MainLayout>
  );
};

export default HabitsScreen;
