import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import CircleButton from 'components/buttons/circle-button';
import NumberPicker from 'components/controls/number-picker';
import {usePost} from 'pkgs/api/hooks';
import moment from 'moment';
import {isEmpty} from 'utils';
import TextAreaField from 'components/controls/text-area-field';

const HabitFollowup = ({
  habitId,
  isCounter,
  counterGoal,
  counter = 0,
  todayFollowup = null,
  onSaved,
}) => {
  const classes = useStyles(styles);
  const currentDate = moment().format('YYYY-MM-DD');
  const [loading, sendRequest] = usePost('followups.mark', {
    replace: {
      habit: habitId,
    },
  });
  const {story = ''} = !isEmpty(todayFollowup) ? todayFollowup : {};
  const [storyVal, setStoryVal] = useState(story);
  const [counterVal, setCounterVal] = useState(counter);

  const handleChangeCounter = ({target: {value}}) => {
    setCounterVal(value);
  };

  const handleDone = async () => {
    try {
      const response = await sendRequest({
        apply_date: currentDate,
        remove: false,
        update: Boolean(todayFollowup),
        counter: counterVal,
        story: storyVal,
        accomplished: !isCounter || (isCounter && counter >= counterGoal),
      });
      if (onSaved) {
        onSaved(response);
      }
    } catch (e) {
      // Todo: Handle error
    }
  };
  const handleFail = async () => {
    try {
    } catch (e) {
      // Todo: Handle error
    }
  };

  return (
    <View style={classes.root}>
      <View style={classes.row}>
        <TextAreaField
          label="Whats your story"
          onChange={({target: {value}}) => setStoryVal(value)}
          secondary
          value={storyVal}
        />
      </View>
      {Boolean(isCounter) && (
        <View style={classes.row}>
          <NumberPicker
            onChange={handleChangeCounter}
            secondary
            enableEdit={false}
            min={counter}
            max={counterGoal}
            value={counter}
          />
        </View>
      )}
      <View style={classes.actions}>
        {loading && <ActivityIndicator color="#FFF" size={50} />}
        {!loading && (
          <>
            <CircleButton
              icon="frown"
              danger
              label="Fail"
              onPress={handleFail}
            />
            <CircleButton
              icon="smile-beam"
              label="Done"
              success
              onPress={handleDone}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default HabitFollowup;
