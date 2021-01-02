import React, {useState} from 'react';
import {View} from 'react-native';
import IconButton from 'components/buttons/icon-button';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextField from 'components/controls/text-field';
import useToggle from 'hooks/use-toggle';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import moment from 'moment';

const DatePicker = ({
  inputFormat = 'YYYY-MM-DD',
  label,
  name,
  onChange,
  secondary,
  value,
}) => {
  const defaultDate = value ? moment(value, inputFormat) : moment();
  const classes = useStyles(styles);
  const [date, setDate] = useState(defaultDate.toDate());
  const [show, toggleShow] = useToggle();
  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (onChange) {
      onChange({
        target: {
          name,
          value: currentDate,
        },
      });
    }
  };
  return (
    <>
      <TextField
        addOn={() => <IconButton onPress={toggleShow} icon="calendar-alt" />}
        label={label}
        onlyMask
        onPress={toggleShow}
        secondary={secondary}
        value={value ? moment(date).format('YYYY-MM-DD') : null}
      />
      {show && (
        <View style={classes.calendarWrapper}>
          <View style={classes.actionsWrapper}>
            <IconButton
              icon="times"
              classes={{root: classes.closeButton}}
              onPress={toggleShow}
            />
          </View>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="spinner"
            onChange={handleChange}
          />
        </View>
      )}
    </>
  );
};

export default DatePicker;
