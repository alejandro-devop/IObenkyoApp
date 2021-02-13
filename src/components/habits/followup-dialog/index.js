import React from 'react';
import HabitFollowup from 'components/habits/habit-followup';
import ScrollView from 'components/commons/scrollview';
import Dialog from 'components/dialogs/dialog';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import moment from 'moment';
import {isEmpty} from 'utils';
import useHabits from 'hooks/use-habits';
import useSession from 'pkgs/session/hooks/useSession';

const FollowUpDialog = ({day, habit = {}, onSaved, open, onClose}) => {
  const classes = useStyles(styles);
  const {title, is_counter, counter_goal, follow_ups} = habit;
  const {getData} = useHabits({lazy: true});
  const {setAll} = useSession();

  const currentDayFollowUp = follow_ups.find(
    (item) =>
      day === moment(item.apply_date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
  );

  const {counter = 0} = !isEmpty(currentDayFollowUp) ? currentDayFollowUp : {};

  const handleSaved = async () => {
    const newHabits = await getData();
    setAll({
      habits: newHabits,
    });
    if (onSaved) {
      onSaved();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      contentStyles={classes.root}
      title={`Follow up to ${title}`}>
      <ScrollView useKeyboard>
        <HabitFollowup
          day={day}
          isCounter={Boolean(is_counter)}
          habitId={habit.id}
          secondary
          counter={counter}
          todayFollowup={currentDayFollowUp}
          counterGoal={counter_goal}
          onSaved={handleSaved}
        />
      </ScrollView>
    </Dialog>
  );
};

export default FollowUpDialog;
