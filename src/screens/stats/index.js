import React from 'react';
import {View} from 'react-native';
import MainLayout from 'screens/layouts/main-layout';
import Text from 'components/base/text';

const StatsScreen = () => {
  return (
    <MainLayout title="Stats" icon="chart-pie">
      <View>
        <Text>Stats</Text>
      </View>
    </MainLayout>
  );
};

export default StatsScreen;
