import React from 'react';
import MainLayout from 'screens/layouts/main-layout';
import TasksControl from 'components/tasks/tasks-control';
import GroupAdd from 'components/tasks/group-add';
import TaskAdd from 'components/tasks/task-add';
const TasksControlScreen = () => {
  return (
    <MainLayout>
      <TasksControl />
      {/*<GroupAdd />*/}
      {/*<TaskAdd/>*/}
    </MainLayout>
  );
};

export default TasksControlScreen;
