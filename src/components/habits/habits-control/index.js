import React, {useState} from 'react';
import {View} from 'react-native';
import moment from 'moment';
import ScrollView from 'components/commons/scrollview';
import useSession from 'pkgs/session/hooks/useSession';
import LineRender from './line-render';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import useToggle from 'hooks/use-toggle';
import FollowUpDialog from 'components/habits/followup-dialog';
import EmptyMessage from 'components/commons/empty-message';
import Button from 'components/buttons/button';
import useNavigate from 'hooks/use-navigate';

const HabitsControl = () => {
  const classes = useStyles(styles);
  const {navigation} = useNavigate();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedHabit, setSelectedHabit] = useState();
  const [openedDialog, toggleDialog] = useToggle(false);
  const startOfWeek = moment().startOf('isoWeek');
  const endOfWeek = moment().endOf('isoWeek');
  const days = endOfWeek.diff(startOfWeek, 'days') + 1;
  const {session = {}} = useSession();
  const {habits = []} = session;

  const handleSelectDay = (day, habit) => {
    setSelectedHabit(habit);
    setSelectedDay(day);
    toggleDialog();
  };

  const onCloseDialog = () => {
    toggleDialog();
    setSelectedHabit(null);
    setSelectedDay(null);
  };

  const handleSaved = () => {
    // todo: notification when the follow up is saved
    onCloseDialog();
  };

  const goToAddHabits = () => {
    navigation.navigate('manage-habits');
  };

  return (
    <>
      <ScrollView>
        <View style={classes.root}>
          {habits.length === 0 && (
            <View style={classes.emptySet}>
              <EmptyMessage message="No habits saved yet" />
              <Button secondary onPress={goToAddHabits}>
                Add habits
              </Button>
            </View>
          )}
          {habits.map((item) => (
            <LineRender
              startDay={startOfWeek.format('YYYY-MM-DD')}
              onSelectDay={handleSelectDay}
              days={days}
              key={`habit-${item.id}`}
              habit={item}
            />
          ))}
        </View>
      </ScrollView>
      {openedDialog && (
        <FollowUpDialog
          open={true}
          onClose={onCloseDialog}
          onSaved={handleSaved}
          habit={selectedHabit}
          day={selectedDay}
        />
      )}
    </>
  );
};

export default HabitsControl;
