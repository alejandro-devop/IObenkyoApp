import React from 'react';
import {View} from 'react-native';
import mocks from './mocks';
import {useStyles} from 'theme/hooks';
import TaskGroup from './task-group';
import styles from './styles';
import FloatingButton from 'components/buttons/floating-button';
import ScrollView from 'components/commons/scrollview';

const TasksControl = () => {
  const classes = useStyles(styles);
  const groups = mocks;
  const handleOpenAdd = () => {};
  return (
    <>
      <ScrollView>
        <View style={classes.root}>
          {groups.map((item, key) => (
            <TaskGroup group={item} key={`groups-${key}-${item.key}`} />
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
          onPress={handleOpenAdd}
          style={classes.fab1}
        />
        <FloatingButton
          icon="plus"
          onPress={handleOpenAdd}
          style={classes.fab2}
        />
      </View>
    </>
  );
};

export default TasksControl;
