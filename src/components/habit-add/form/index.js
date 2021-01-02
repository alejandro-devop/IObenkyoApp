import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import styles from './styles';
import TextField from 'components/controls/text-field';
import Switch from 'components/controls/switch';
import DatePicker from 'components/controls/date-picker';
import moment from 'moment';
const currentDate = moment();
const nextDate = moment().add(1, 'days');

const Form = () => {
  const classes = useStyles(styles);
  const [form, setForm] = useState({
    startDate: currentDate.format('YYYY-MM-DD'),
    goalDate: nextDate.format('YYYY-MM-DD'),
  });
  const {startDate, goalDate} = form;
  return (
    <View style={classes.root}>
      <ScrollView>
        <TextField label="Title" secondary />
        <TextField label="Description" secondary />
        <View style={classes.row}>
          <Switch label="Is counter?" secondary />
        </View>
        <DatePicker label="Start date" secondary value={startDate} />
        <DatePicker label="Goal date" secondary value={goalDate} />
      </ScrollView>
    </View>
  );
};

export default Form;
