import React from 'react';
import {View} from 'react-native';
import MainLayout from 'screens/layouts/main-layout';
import Text from 'components/base/text';

const DashboardScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>Dashboard</Text>
      </View>
    </MainLayout>
  );
};

export default DashboardScreen;
