import React from 'react';
import {View} from 'react-native';
import InsidesLayout from 'screens/layouts/insides-layout';
import useSession from 'pkgs/session/hooks/useSession';
import InfoRow from 'components/base/info-row';
import {useStyles} from 'theme/hooks';
import styles from './styles';

const HabitView = () => {
  const {
    session: {selectedHabit = {}},
  } = useSession();
  const classes = useStyles(styles);
  const {
    category = {},
    description,
    is_counter: isCounter,
    streak_count: streak,
    max_streak: maxStreak,
    streak_goal: streakGoal,
    title,
  } = selectedHabit;
  return (
    <InsidesLayout title={title} icon={category.icon}>
      <View style={classes.content}>
        <InfoRow
          icon="align-justify"
          title="Description"
          value={description}
          ifNotEmpty
        />
        <InfoRow
          icon="fire-alt"
          title="Streak"
          horizontal
          value={`${streak} / ${streakGoal}`}
          ifNotEmpty
        />
      </View>
    </InsidesLayout>
  );
};

export default HabitView;
