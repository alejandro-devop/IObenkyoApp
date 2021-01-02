import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import {useGet} from 'pkgs/api/hooks';
import {ScrollView} from 'components/commons';
import HabitItem from './habit-item';
import FloatingButton from 'components/buttons/floating-button';
import useNavigate from 'hooks/use-navigate';

const HabitList = () => {
  const classes = useStyles(styles);
  const {navigation} = useNavigate();
  const {data = []} = useGet('habits.list');
  const openAdd = () => {
    navigation.navigate('add-habit');
  };
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
      <FloatingButton icon="plus" onPress={openAdd} />
    </View>
  );
};

export default HabitList;
