import React from 'react';
import {View} from 'react-native';
import MainLayout from 'screens/layouts/main-layout';
import Text from 'components/base/text';

const AgendaScreen = () => {
  return (
    <MainLayout title="Agenda" icon="calendar-alt">
      <View>
        <Text>Agenda</Text>
      </View>
    </MainLayout>
  );
};

export default AgendaScreen;
