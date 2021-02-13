import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import TextField from 'components/controls/text-field';
import IconButton from 'components/buttons/icon-button';
import useToggle from 'hooks/use-toggle';
import {useGet} from 'pkgs/api/hooks';
import InputDialog from 'components/controls/task-groups-input/input-dialog';
import {isEmpty} from 'utils';

const TaskGroupsInput = ({
  label,
  labelLeft,
  name,
  onChange,
  secondary,
  value,
}) => {
  const classes = useStyles(styles);
  const [dialogOpened, toggleDialog] = useToggle();
  const [selected, setSelected] = useState(value);
  const {data = [], loading, refresh} = useGet('tasks.groups.list');

  const handleSelectGroup = (newGroup) => {
    setSelected(newGroup);
    toggleDialog();
    if (onChange) {
      onChange({
        target: {
          name,
          value: newGroup,
        },
      });
    }
  };
  const valueToDisplay = !isEmpty(selected) ? selected.name : '';
  return (
    <>
      <View style={classes.root}>
        <TextField
          label={label}
          labelLeft={labelLeft}
          name={name}
          onlyMask
          onChange={onChange}
          value={valueToDisplay}
          onPress={() => toggleDialog()}
          secondary={secondary}
          addOn={() => (
            <IconButton
              secondary
              icon="chevron-down"
              size="sm"
              onPress={() => toggleDialog()}
            />
          )}
        />
        {loading && (
          <View style={classes.loader}>
            <View style={classes.activityWrapper}>
              <ActivityIndicator />
            </View>
          </View>
        )}
      </View>
      {dialogOpened && (
        <InputDialog
          open={dialogOpened}
          refreshList={refresh}
          onClose={() => toggleDialog()}
          title={label}
          groups={data}
          onSelectGroup={handleSelectGroup}
          selected={selected}
        />
      )}
    </>
  );
};

export default TaskGroupsInput;
