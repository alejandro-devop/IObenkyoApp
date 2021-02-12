import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import TextField from 'components/controls/text-field';
import TextAreaField from 'components/controls/text-area-field';
import Button from 'components/buttons/button';
import styles from './styles';
import useForm from 'hooks/use-form';
import classNames from 'utils/classNames';
import {usePost} from 'pkgs/api/hooks';
import useErrorReporter from 'hooks/use-error-reporter';

const GroupAdd = ({onCancel, onSaved, secondary}) => {
  const classes = useStyles(styles);
  const [loading, sendRequest] = usePost('tasks.groups.save');
  const reportError = useErrorReporter({
    filePath: 'src/components/tasks/group-add/index.js',
  });
  const [form, onChange, {isValid}] = useForm({
    defaultValues: {
      name: '',
      description: '',
    },
    required: 'name,description',
  });
  const {name, description} = form;

  /**
   * Function to save the new group
   * @returns {Promise<void>}
   */
  const handleSave = async () => {
    try {
      const savedRecord = await sendRequest({
        name,
        description,
      });
      if (onSaved) {
        onSaved(savedRecord);
      }
      // Todo: Add saved notification
    } catch (e) {
      reportError(e, {
        code: 'IO-01X0002',
        message: 'Error while saving the group',
      });
    }
  };

  return (
    <View style={classNames({root: true, rootSecondary: secondary}, classes)}>
      <View style={classes.row}>
        <TextField
          label="Group name"
          labelLeft
          name="name"
          onChange={onChange}
          secondary={secondary}
          value={name}
        />
      </View>
      <View style={classes.row}>
        <TextAreaField
          label="Description"
          labelLeft
          secondary={secondary}
          name="description"
          onChange={onChange}
          value={description}
        />
      </View>
      <View style={classes.actions}>
        <Button disabled={!isValid} isLoading={loading} onPress={handleSave}>
          Save
        </Button>
        <Button secondary onPress={onCancel}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

export default GroupAdd;
