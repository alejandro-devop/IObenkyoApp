import React, {useState} from 'react';
import {View, RefreshControl} from 'react-native';
import {useStyles} from 'theme/hooks';
import TaskGroup from './task-group';
import styles from './styles';
import FloatingButton from 'components/buttons/floating-button';
import ScrollView from 'components/commons/scrollview';
import {useGet} from 'pkgs/api/hooks';
import Text from 'components/base/text';
import useToggle from 'hooks/use-toggle';
import TaskAddDialog from 'components/tasks/task-add-dialog';
import CircleButton from 'components/buttons/circle-button';
import GroupAddDialog from 'components/tasks/group-add-dialog';

const TasksControl = () => {
  const classes = useStyles(styles);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [openAddTask, toggleOpenAdd] = useToggle(false);
  const [openAddGroup, toggleAddGroup] = useToggle(false);
  const {data = [], loading, refresh} = useGet('tasks.list');

  const handleOpenAdd = (group) => {
    setSelectedGroup(group);
    toggleOpenAdd();
  };

  const handleCloseAdd = () => {
    setSelectedGroup(null);
    toggleOpenAdd();
  };

  const handleSaved = () => {
    toggleOpenAdd();
    refresh();
  };

  const handleUpdatedTask = () => {
    refresh();
  };

  const updateGroups = () => {
    toggleAddGroup();
    refresh();
  };

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={loading} />
        }>
        <View style={classes.root}>
          {data.length === 0 && (
            <View style={classes.emptySetWrapper}>
              <Text variant="paragraph" style={classes.emptyText}>
                No groups added
              </Text>
              <CircleButton
                onPress={toggleAddGroup}
                icon="plus"
                label="Add group"
                primary
              />
            </View>
          )}
          {data.map((item, key) => (
            <TaskGroup
              delay={key * 400}
              group={item}
              key={`groups-${key}-${item.key}`}
              onAddTask={handleOpenAdd}
              onSaved={handleUpdatedTask}
            />
          ))}
        </View>
      </ScrollView>
      <View style={classes.fabWrapper}>
        <FloatingButton
          classes={{
            root: classes.fab,
            icon: classes.fabIcon,
          }}
          onPress={() => toggleAddGroup()}
          icon="list-ul"
          success
          style={classes.fab1}
        />
        <FloatingButton
          icon="plus"
          onPress={() => toggleOpenAdd(null)}
          style={classes.fab2}
        />
      </View>
      {openAddGroup && (
        <GroupAddDialog onSaved={updateGroups} onClose={toggleAddGroup} />
      )}
      {openAddTask && (
        <TaskAddDialog
          open
          onClose={handleCloseAdd}
          onSaved={handleSaved}
          selectedGroup={selectedGroup}
        />
      )}
    </>
  );
};

export default TasksControl;
