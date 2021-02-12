import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import TaskItem from '../task-item';
import CircleButton from 'components/buttons/circle-button';

const TaskGroup = ({group = {}}) => {
  const {name, tasks = [], id} = group;
  const [selected, setSelected] = useState([]);
  const classes = useStyles(styles);
  const isSelected = (key) => selected.includes(key);
  const handleSelected = (key) => {
    if (isSelected(key)) {
      setSelected(selected.filter((item) => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };
  return (
    <View style={classes.root}>
      <View style={classes.titleWrapper}>
        <Text variant="subtitle">{name}</Text>
      </View>
      <View style={classes.container}>
        {tasks.map((item, key) => (
          <TaskItem
            checked={isSelected(key)}
            key={`g-${id}-${item.id}-${key}`}
            onSelect={() => handleSelected(key)}
            task={item}
          />
        ))}
        <View style={classes.actions}>
          <CircleButton icon="plus" primary />
        </View>
      </View>
    </View>
  );
};

export default TaskGroup;
