import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from 'components/base/text';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import CheckboxField from 'components/controls/checkbox-field';
import classNames from 'utils/classNames';

const TaskItem = ({task, onSelect, checked}) => {
  const classes = useStyles(styles);
  const {text} = task;
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={classNames({root: true, rootSelected: checked}, classes)}>
      <CheckboxField onPress={onSelect} checked={checked} />
      <View style={classes.textWrapper}>
        <Text variant="paragraph" style={classes.text}>
          {text}
        </Text>
        {checked && <View style={classes.overLine} />}
      </View>
    </TouchableOpacity>
  );
};

TaskItem.defaultProps = {
  task: {},
};

export default TaskItem;
