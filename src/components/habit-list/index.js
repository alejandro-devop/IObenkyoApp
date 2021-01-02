import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import {useGet} from 'pkgs/api/hooks';
import {ScrollView} from 'components/commons';
import HabitItem from './habit-item';

const HabitList = () => {
  const classes = useStyles(styles);
  const {data = [], loading} = useGet('habits.list');
  return (
    <View style={classes.root}>
      <ScrollView style={classes.scroll}>
        {data.map((item, key) => (
          <HabitItem
            delay={100 * key}
            key={`habit-${item.id}`}
            habitItem={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HabitList;
