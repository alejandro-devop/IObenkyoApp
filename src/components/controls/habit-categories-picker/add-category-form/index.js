import React, {useState} from 'react';
import {View} from 'react-native';
import Dialog from 'components/dialogs/dialog';
import IconPicker from 'components/controls/icon-picker';
import TextField from 'components/controls/text-field';
import Button from 'components/buttons/button';
import {isEmpty} from 'utils';
import {usePost} from 'pkgs/api/hooks';
import useHabitCategories from 'hooks/use-habit-categories';

const AddCategoryForm = ({open, onClose}) => {
  const [form, setForm] = useState({
    title: '',
    icon: '',
  });
  const [loading, sendRequest] = usePost('habitCategories.save');
  const {getData} = useHabitCategories({lazy: true});
  const handleChange = ({target: {name, value}}) =>
    setForm({
      ...form,
      [name]: value,
    });
  const {title, icon} = form;
  const isValid = !isEmpty(title) && !isEmpty(icon);
  const handleSubmit = async () => {
    await sendRequest({
      name: title,
      icon,
    });
    await getData();
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} title="Add category">
      <TextField
        label="Name"
        name="title"
        value={title}
        secondary
        onChange={handleChange}
      />
      <IconPicker
        label="Icon"
        placeholder="Select an icon"
        secondary
        name="icon"
        value={icon}
        onChange={handleChange}
      />
      <View>
        <Button isLoading={loading} disabled={!isValid} onPress={handleSubmit}>
          Save
        </Button>
        <Button secondary>Cancel</Button>
      </View>
    </Dialog>
  );
};

export default AddCategoryForm;
