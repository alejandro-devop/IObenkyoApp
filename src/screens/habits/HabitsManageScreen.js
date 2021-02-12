import React from 'react';
import HabitList from 'components/habit-list';
import InsidesLayout from 'screens/layouts/insides-layout';

const HabitsManageScreen = () => {
  return (
    <InsidesLayout title="My Habits" icon="brain">
      {(ready) => ready && <HabitList />}
    </InsidesLayout>
  );
};

export default HabitsManageScreen;
