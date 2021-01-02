import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import styles from './styles';
import TextField from 'components/controls/text-field';
import Switch from 'components/controls/switch';
import DatePicker from 'components/controls/date-picker';
import moment from 'moment';
import RadioButton from 'components/controls/radio-button';
const currentDate = moment();
const nextDate = moment().add(1, 'days');

const Form = () => {
  const classes = useStyles(styles);
  const [form, setForm] = useState({
    keep: true,
    startDate: currentDate.format('YYYY-MM-DD'),
    goalDate: nextDate.format('YYYY-MM-DD'),
  });
  const onChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value});
  };
  const {keep, startDate, goalDate} = form;
  return (
    <View style={classes.root}>
      <ScrollView>
        <TextField label="Title" secondary />
        <TextField label="Description" secondary />
        <View style={classes.row}>
          <Switch label="Is counter?" secondary />
        </View>
        <View style={[classes.row, classes.rowHorizontal]}>
          <RadioButton
            label="Keep"
            checked={keep}
            secondary
            onChange={() => onChange({target: {name: 'keep', value: true}})}
          />
          <RadioButton
            label="Avoid"
            checked={!keep}
            secondary
            onChange={() => onChange({target: {name: 'keep', value: false}})}
          />
        </View>
        <DatePicker label="Start date" secondary value={startDate} />
        <DatePicker label="Goal date" secondary value={goalDate} />
      </ScrollView>
    </View>
  );
};

export default Form;
