import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import CheckboxField from 'components/controls/checkbox-field';
import classNames from 'utils/classNames';
import {usePost} from 'pkgs/api/hooks';
import Slide from 'components/anims/slide';

const TaskItem = ({delay, task, onSaved}) => {
  const classes = useStyles(styles);
  const [loading, sendRequest] = usePost('tasks.change', {
    replace: {
      task: task.id,
    },
  });
  const {text} = task;
  const checked = Boolean(task.is_done);

  const handleCheck = async () => {
    sendRequest({state: !checked});
    setTimeout(() => {
      onSaved();
    }, 300);
  };

  return (
    <Slide direction="right" delay={delay}>
      <TouchableOpacity
        onPress={handleCheck}
        style={classNames({root: true, rootSelected: checked}, classes)}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <CheckboxField onPress={handleCheck} checked={checked} />
        )}
        <View style={classes.textWrapper}>
          <Text variant="paragraph" style={classes.text}>
            {text}
          </Text>
          {checked && <View style={classes.overLine} />}
        </View>
      </TouchableOpacity>
    </Slide>
  );
};

TaskItem.defaultProps = {
  task: {},
};

export default TaskItem;
