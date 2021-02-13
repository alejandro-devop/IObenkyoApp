import React from 'react';
import Dialog from 'components/dialogs/dialog';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import TaskAdd from 'components/tasks/task-add';

const TaskAddDialog = ({open, onClose, selectedGroup = {}, onSaved}) => {
  const {name} = selectedGroup;
  const classes = useStyles(styles);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      contentStyles={classes.root}
      title={name}>
      <TaskAdd
        defaultGroup={selectedGroup}
        secondary
        onCancel={onClose}
        onSaved={onSaved}
      />
    </Dialog>
  );
};

export default TaskAddDialog;
