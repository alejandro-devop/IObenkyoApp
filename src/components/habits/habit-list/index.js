import React from 'react';
import {RefreshControl, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import {ScrollView} from 'components/commons';
import HabitItem from './habit-item';
import Text from 'components/base/text';
import FloatingButton from 'components/buttons/floating-button';
import useNavigate from 'hooks/use-navigate';
import useSession from 'pkgs/session/hooks/useSession';
import useHabits from 'hooks/use-habits';
import EmptyMessage from 'components/commons/empty-message';

const HabitList = () => {
  const classes = useStyles(styles);
  const {navigation} = useNavigate();
  const {
    set,
    session: {},
  } = useSession();
  const {habits = [], refresh, refreshing} = useHabits();

  const openAdd = () => {
    navigation.navigate('add-habit');
  };
  const handleHabitSelect = (item) => {
    set('selectedHabit', item);
    navigation.navigate('view-habit');
  };
  const handleRefresh = () => {
    refresh();
  };
  return (
    <View style={classes.root}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View style={classes.content}>
          {habits.length === 0 && (
            <EmptyMessage message="No habits added yet" />
          )}
          {habits.map((item, key) => (
            <HabitItem
              delay={100 * key}
              key={`habit-${item.id}`}
              habitItem={item}
              onPress={() => handleHabitSelect(item)}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingButton icon="plus" onPress={openAdd} />
    </View>
  );
};

export default HabitList;
