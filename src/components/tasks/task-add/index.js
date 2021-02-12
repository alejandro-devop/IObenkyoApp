import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import useForm from 'hooks/use-form';
import TextField from 'components/controls/text-field';
import TextAreaField from 'components/controls/text-area-field';
import Button from 'components/buttons/button';
import DatePicker from 'components/controls/date-picker';
import Switch from 'components/controls/switch';
import TaskGroupsInput from 'components/controls/task-groups-input';

const TaskAdd = () => {
  const classes = useStyles(styles);
  const [form, onChange, {isValid}] = useForm({
    defaultValues: {
      text: '',
      description: '',
    },
    required: 'name',
  });
  const {text, description} = form;
  return (
    <View style={classes.root}>
      <View style={classes.row}>
        <TaskGroupsInput label="Task group" labelLeft />
      </View>
      <View style={classes.row}>
        <TextField
          label="Task title"
          labelLeft
          name="text"
          onChange={onChange}
          value={text}
        />
      </View>
      <View style={classes.row}>
        <DatePicker labelLeft label="Apply date" />
      </View>
      <View style={[classes.rowHorizontal, classes.row]}>
        <View style={classes.col}>
          <Switch label="All day?" />
        </View>
        <View style={classes.col}>
          <Switch label="Has alarm?" />
        </View>
      </View>
      <View style={classes.row}>
        <TextAreaField
          label="Description"
          labelLeft
          name="description"
          onChange={onChange}
          value={description}
        />
      </View>
      <View style={classes.actions}>
        <Button disabled={!isValid}>Save</Button>
        <Button secondary>Cancel</Button>
      </View>
    </View>
  );
};

export default TaskAdd;
