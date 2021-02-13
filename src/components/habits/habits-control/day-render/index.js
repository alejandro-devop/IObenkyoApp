import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import Text from 'components/base/text';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import RadioButton from 'components/controls/radio-button';
import JSOND from 'dev-tools/components/jsond';
import {isEmpty} from 'utils';

const DayRender = ({
  startDay,
  format = 'YYYY-MM-DD',
  onSelectDay,
  habit,
  day = 0,
}) => {
  const classes = useStyles(styles);
  const startDate = moment(startDay);
  const date = startDate.add(day, 'days');
  const today = moment().format('D');
  const currentDateStr = date.format(format);
  const dayNumber = date.format('D');
  const {follow_ups = [], is_counter} = habit;
  const currentFollowUp = follow_ups.find((item) => {
    const itemDate = moment(item.apply_date, `${format} HH:mm:ss`).format(
      format,
    );
    return itemDate === currentDateStr;
  });
  const dayLetters = date.format('dd');
  const isCounter = Boolean(is_counter);
  const {counter} = !isEmpty(currentFollowUp) ? currentFollowUp : {};
  const isChecked = Boolean(
    !isEmpty(currentFollowUp) ? currentFollowUp.accomplished : false,
  );
  return (
    <View style={classes.root}>
      {today === dayNumber && <View style={classes.todayIndicator} />}
      <Text style={classes.dayText}>{dayLetters}</Text>
      <Text style={classes.day}>{dayNumber}</Text>
      <View style={classes.controlWrapper}>
        <RadioButton
          readOnly={isChecked}
          checked={isChecked || (isCounter && counter > 0)}
          success={isChecked}
          onChange={() => onSelectDay(date.format(format), habit)}
          size="md"
        />
        {isCounter && <Text style={classes.counterText}>{counter}</Text>}
      </View>
      {day > 0 && <View style={classes.track} />}
    </View>
  );
};

export default DayRender;
