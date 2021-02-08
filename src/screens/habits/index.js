import React from 'react';
import MainLayout from 'screens/layouts/main-layout';
import HabitList from 'components/habit-list';

const HabitsScreen = () => {
  return (
    <MainLayout>
      <HabitList />
    </MainLayout>
  );
};

export default HabitsScreen;
