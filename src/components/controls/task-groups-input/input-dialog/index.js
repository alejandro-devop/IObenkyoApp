import React from 'react';
import View from 'components/base/view';
import Dialog from 'components/dialogs/dialog';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import GroupAdd from 'components/tasks/group-add';
import useToggle from 'hooks/use-toggle';
import ScrollView from 'components/commons/scrollview';
import Slide from 'components/anims/slide';
import Text from 'components/base/text';
import CircleButton from 'components/buttons/circle-button';
import GroupItem from 'components/controls/task-groups-input/group-item';
import {isEmpty} from 'utils';

const InputDialog = ({
  groups = [],
  open,
  onClose,
  onSelectGroup,
  refreshList,
  selected,
  title,
}) => {
  const classes = useStyles(styles);
  const [openAdd, toggleAdd] = useToggle(false);
  /**
   * Function to be executed when a new group is saved
   */
  const handleSaved = () => {
    refreshList();
    toggleAdd();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      contentStyles={classes.root}>
      <ScrollView useKeyboard>
        <View style={classes.content}>
          {openAdd && (
            <Slide direction="left">
              <Text
                variant="subtitle"
                center
                secondary
                style={classes.titleText}>
                Add new group
              </Text>
              <GroupAdd
                secondary
                onSaved={handleSaved}
                onCancel={() => toggleAdd()}
              />
            </Slide>
          )}
          {!openAdd && (
            <>
              {groups.map((group) => (
                <GroupItem
                  selected={!isEmpty(selected) && selected.id === group.id}
                  onSelect={onSelectGroup}
                  group={group}
                  key={`task-group-${group.id}`}
                />
              ))}
              {groups.length === 0 && (
                <View>
                  <Text variant="paragraph" secondary style={classes.emptyText}>
                    You have no groups added
                  </Text>
                </View>
              )}
              <View style={classes.actions}>
                <CircleButton icon="plus" onPress={toggleAdd} />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </Dialog>
  );
};

export default InputDialog;
