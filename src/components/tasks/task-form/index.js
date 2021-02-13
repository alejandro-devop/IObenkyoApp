import React from 'react';
import {View} from 'react-native';
import ScrollView from 'components/commons/scrollview';
import TextField from 'components/controls/text-field';
import TextAreaField from 'components/controls/text-area-field';
import TaskGroupsInput from 'components/controls/task-groups-input';
import DatePicker from 'components/controls/date-picker';
import Switch from 'components/controls/switch';
import Button from 'components/buttons/button';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import classNames from 'utils/classNames';

const TaskForm = ({
  form,
  onChange,
  isValid,
  loading,
  onCancel,
  onSubmit,
  secondary,
}) => {
  const classes = useStyles(styles);
  const {apply_date, allDay, group, hasAlarm, text, description} = form;
  return (
    <ScrollView useKeyboard>
      <View style={classNames({root: true, rootSecondary: secondary}, classes)}>
        <View style={classes.row}>
          <TextField
            label="Task title"
            labelLeft
            name="text"
            onChange={onChange}
            secondary={secondary}
            value={text}
          />
        </View>
        <View style={classes.row}>
          <TextAreaField
            label="Description"
            labelLeft
            name="description"
            onChange={onChange}
            value={description}
            secondary={secondary}
          />
        </View>
        <View style={classes.row}>
          <TaskGroupsInput
            label="Task group"
            labelLeft
            name="group"
            onChange={onChange}
            secondary={secondary}
            value={group}
          />
        </View>
        <View style={classes.row}>
          <DatePicker
            name="apply_date"
            onChange={onChange}
            labelLeft
            label="Apply date"
            secondary={secondary}
            value={apply_date}
          />
        </View>
        <View style={[classes.rowHorizontal, classes.row]}>
          <View style={classes.col}>
            <Switch
              label="All day?"
              name={'allDay'}
              value={allDay}
              success
              secondary={secondary}
              onChange={onChange}
            />
          </View>
          <View style={classes.col}>
            <Switch
              name={'hasAlarm'}
              onChange={onChange}
              value={hasAlarm}
              success
              label="Has alarm?"
              secondary={secondary}
            />
          </View>
        </View>
        <View style={classes.actions}>
          <Button isLoading={loading} disabled={!isValid} onPress={onSubmit}>
            Save
          </Button>
          <Button secondary onPress={onCancel}>
            Cancel
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default TaskForm;
