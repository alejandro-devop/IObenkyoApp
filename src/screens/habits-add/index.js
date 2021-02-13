import React from 'react';
import InsidesLayout from 'screens/layouts/insides-layout';
import HabitAdd from 'components/habits/habit-add';

const HabitsAddScreen = () => {
  return (
    <InsidesLayout title="Add habit">
      <HabitAdd />
    </InsidesLayout>
  );
};

export default HabitsAddScreen;
