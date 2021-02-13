import React from 'react';
import useForm from 'hooks/use-form';
import {usePost} from 'pkgs/api/hooks';
import TaskForm from '../task-form';
import useErrorReporter from 'hooks/use-error-reporter';
import {isEmpty} from 'utils';

const TaskAdd = ({defaultGroup, onCancel, onSaved, secondary}) => {
  const [loading, sendRequest] = usePost('tasks.save');
  const reportError = useErrorReporter({
    filePath: 'src/components/tasks/task-add/index.js',
  });
  const [form, onChange, {isValid}] = useForm({
    defaultValues: {
      text: '',
      group: defaultGroup,
      description: '',
    },
    required: 'text,group',
  });

  const handleSubmitForm = async () => {
    const {apply_date, allDay, group, hasAlarm, text, description} = form;
    try {
      const response = await sendRequest({
        text,
        description: isEmpty(description) ? '...' : description,
        is_all_day: Boolean(allDay),
        group: group.id,
        apply_date: isEmpty(apply_date) ? apply_date : '',
        has_alarm: Boolean(hasAlarm),
      });
      console.log('response: ', response, {
        text,
        description: isEmpty(description) ? '' : description,
        is_all_day: allDay,
        group: group.id,
        apply_date,
        has_alarm: hasAlarm,
      });
      if (onSaved) {
        onSaved();
      }
      // Todo: Notify success
    } catch (e) {
      reportError(e, {
        code: 'IO-01X0003',
        message: 'Error while saving the task',
      });
    }
  };

  return (
    <TaskForm
      form={form}
      onChange={onChange}
      isValid={isValid}
      loading={loading}
      onSubmit={handleSubmitForm}
      onCancel={onCancel}
      secondary={secondary}
    />
  );
};

export default TaskAdd;
