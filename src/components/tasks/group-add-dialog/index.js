import React from 'react';
import Dialog from 'components/dialogs/dialog';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import GroupAdd from 'components/tasks/group-add';

const GroupAddDialog = ({open, onClose, onSaved}) => {
  const classes = useStyles(styles);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      contentStyles={classes.root}
      title="Add Group">
      <GroupAdd secondary onSaved={onSaved} onCancel={onClose} />
    </Dialog>
  );
};

export default GroupAddDialog;
