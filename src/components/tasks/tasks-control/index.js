import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import TaskGroup from './task-group';
import styles from './styles';
import FloatingButton from 'components/buttons/floating-button';
import ScrollView from 'components/commons/scrollview';
import {useGet} from 'pkgs/api/hooks';
import JSOND from 'dev-tools/components/jsond';
import useToggle from 'hooks/use-toggle';
import TaskAddDialog from 'components/tasks/task-add-dialog';

const TasksControl = () => {
  const classes = useStyles(styles);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [openAddTask, toggleOpenAdd] = useToggle(false);
  const {data = [], refresh} = useGet('tasks.list');

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

  return (
    <>
      <ScrollView>
        <View style={classes.root}>
          {data.map((item, key) => (
            <TaskGroup
              group={item}
              key={`groups-${key}-${item.key}`}
              onAddTask={handleOpenAdd}
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
          icon="list-ul"
          success
          // onPress={handleOpenAdd}
          style={classes.fab1}
        />
        <FloatingButton
          icon="plus"
          // onPress={handleOpenAdd}
          style={classes.fab2}
        />
      </View>
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
