import React, {useState} from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import Slide from 'components/anims/slide';
import TaskItem from '../task-item';
import CircleButton from 'components/buttons/circle-button';

const TaskGroup = ({delay, group = {}, onAddTask, onSaved}) => {
  const {name, tasks = [], id} = group;
  const [showContent, setShowContent] = useState(false);
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
    <Slide
      delay={delay}
      direction="left"
      onAnimationCompleted={() => setShowContent(true)}
      style={classes.root}>
      <View style={classes.titleWrapper}>
        <Text variant="subtitle">{name}</Text>
      </View>
      <View style={classes.container}>
        {tasks.length === 0 && (
          <Text style={classes.emptyText}>No task added yet</Text>
        )}
        {showContent &&
          tasks.map((item, key) => (
            <TaskItem
              delay={key * 100}
              checked={isSelected(key)}
              key={`g-${id}-${item.id}-${key}`}
              onSelect={() => handleSelected(key)}
              onSaved={onSaved}
              task={item}
            />
          ))}
        <View style={classes.actions}>
          <CircleButton icon="plus" primary onPress={() => onAddTask(group)} />
        </View>
      </View>
    </Slide>
  );
};

export default TaskGroup;
