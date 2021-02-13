import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import styles from './styles';
import TextField from 'components/controls/text-field';
import Switch from 'components/controls/switch';
import moment from 'moment';
import RadioButton from 'components/controls/radio-button';
import NumberPicker from 'components/controls/number-picker';
import {isEmpty} from 'utils';
import Button from 'components/buttons/button';
import HabitCategoriesPicker from 'components/controls/habit-categories-picker';

const currentDate = moment();
const nextDate = moment().add(1, 'days');

const Form = ({isLoading, onSubmit}) => {
  const classes = useStyles(styles);
  const [form, setForm] = useState({
    category: null,
    days: 30,
    keep: true,
    isCounter: true,
    counter: 1,
    startDate: currentDate.format('YYYY-MM-DD'),
    goalDate: nextDate.format('YYYY-MM-DD'),
  });
  const onChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value});
  };
  const {category, days, keep, counter, isCounter, title, description} = form;
  const isValidCounter = (isCounter && counter > 0) || !isCounter;
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(form);
    }
  };
  const isValid =
    isValidCounter &&
    !isEmpty(title) &&
    !isEmpty(description) &&
    !isEmpty(category);
  return (
    <View style={classes.root}>
      <ScrollView>
        <View style={classes.content}>
          <TextField
            labelLeft
            label="Title"
            name="title"
            onChange={onChange}
            value={title}
          />
          <TextField
            labelLeft
            label="Description"
            name="description"
            onChange={onChange}
            value={description}
          />
          <HabitCategoriesPicker
            label="Category"
            name="category"
            onChange={onChange}
            value={category}
          />
          <View style={classes.row}>
            <Switch
              label="Is counter?"
              name="isCounter"
              value={isCounter}
              onChange={onChange}
            />
          </View>
          {isCounter && (
            <NumberPicker
              label="Times"
              name="counter"
              min={1}
              onChange={onChange}
              value={counter}
            />
          )}
          <NumberPicker
            label="Days"
            name="days"
            min={0}
            onChange={onChange}
            value={days}
          />
          <View style={[classes.row, classes.rowHorizontal]}>
            <RadioButton
              size="sm"
              label="Keep"
              checked={keep}
              onChange={() => onChange({target: {name: 'keep', value: true}})}
            />
            <RadioButton
              size="sm"
              label="Avoid"
              checked={!keep}
              onChange={() => onChange({target: {name: 'keep', value: false}})}
            />
          </View>
          <View style={classes.actions}>
            <Button
              disabled={!isValid}
              isLoading={isLoading}
              onPress={handleSubmit}>
              Save
            </Button>
            <Button secondary>Cancel</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Form;
