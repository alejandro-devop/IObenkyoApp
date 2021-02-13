import React from 'react';
import {View} from 'react-native';
import InsidesLayout from 'screens/layouts/insides-layout';
import useSession from 'pkgs/session/hooks/useSession';
import InfoRow from 'components/base/info-row';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import HabitFollowup from 'components/habits/habit-followup';
import moment from 'moment';
import {isEmpty} from 'utils';
import useHabits from 'hooks/use-habits';
import useNavigate from 'hooks/use-navigate';
import Icon from 'components/base/icon';
import Text from 'components/base/text';

const HabitView = () => {
  const {
    session: {selectedHabit = {}},
    setAll,
  } = useSession();
  const {navigation} = useNavigate();
  const {getData} = useHabits({lazy: true});
  const classes = useStyles(styles);
  const {
    category = {},
    description,
    follow_ups = [],
    is_counter: isCounter,
    streak_count: streak = 0,
    max_streak: maxStreak = 0,
    streak_goal: streakGoal = 0,
    counter_goal: counterGoal = 0,
    title,
    id: habitId,
  } = selectedHabit;
  const currentDate = moment().format('YYYY-MM-DD');
  const currentDayFollowUp = follow_ups.find(
    (item) =>
      currentDate ===
      moment(item.apply_date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
  );
  const {counter = 0, accomplished, story = ''} = !isEmpty(currentDayFollowUp)
    ? currentDayFollowUp
    : {};
  const isAccomplished = Boolean(accomplished);

  const handleSaved = async () => {
    const newHabits = await getData();
    setAll({
      habits: newHabits,
    });
    navigation.goBack();
  };
  return (
    <InsidesLayout title={title} icon={category.icon}>
      <View style={classes.content}>
        {Boolean(description) && (
          <InfoRow
            icon="align-justify"
            title="Description"
            value={description}
          />
        )}
        {Boolean(isCounter) && (
          <InfoRow
            icon="bullseye"
            title="Daily goal"
            horizontal
            value={`${counter} / ${counterGoal}`}
            ifNotEmpty
          />
        )}
        <InfoRow
          icon="fire"
          title="Streak"
          horizontal
          value={`${streak} / ${streakGoal}`}
          ifNotEmpty
        />
        <InfoRow
          icon="fire-alt"
          title="Max streak"
          horizontal
          value={`${maxStreak}`}
          ifNotEmpty
        />
        {isAccomplished && (
          <>
            <InfoRow icon="scroll" title="Story" value={story} ifNotEmpty />
            <View style={classes.iconContainer}>
              <View style={classes.accomplishedWrapper}>
                <Icon name="check-circle" style={classes.accomplishedIcon} />
                <Text style={classes.accomplishedLabel}>You did it today!</Text>
              </View>
            </View>
          </>
        )}
      </View>
      {!isAccomplished && (
        <HabitFollowup
          counter={counter}
          todayFollowup={currentDayFollowUp}
          habitId={habitId}
          isCounter={isCounter}
          counterGoal={counterGoal}
          onSaved={handleSaved}
        />
      )}
    </InsidesLayout>
  );
};

export default HabitView;
