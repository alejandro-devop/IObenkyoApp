import React from 'react';
import {View} from 'react-native';
import MainLayout from 'screens/layouts/main-layout';
import Text from 'components/base/text';

const AlertsScreen = () => {
  return (
    <MainLayout title="Alerts" icon="bullhorn">
      <View>
        <Text>Alerts</Text>
      </View>
    </MainLayout>
  );
};

export default AlertsScreen;
