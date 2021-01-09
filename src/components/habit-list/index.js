import React from 'react';
import {RefreshControl, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import {useGet} from 'pkgs/api/hooks';
import {ScrollView} from 'components/commons';
import HabitItem from './habit-item';
import FloatingButton from 'components/buttons/floating-button';
import useNavigate from 'hooks/use-navigate';
import useSession from 'pkgs/session/hooks/useSession';

const HabitList = () => {
  const classes = useStyles(styles);
  const {navigation} = useNavigate();
  const {session = {}, set} = useSession();
  const {habits = []} = session;
  const {refresh, refreshing} = useGet('habits.list', {
    onCompleted: (data) => {
      set('habits', data);
    },
  });
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
        }
        style={classes.scroll}>
        {habits.map((item, key) => (
          <HabitItem
            delay={100 * key}
            key={`habit-${item.id}`}
            habitItem={item}
            onPress={() => handleHabitSelect(item)}
          />
        ))}
      </ScrollView>
      <FloatingButton icon="plus" onPress={openAdd} />
    </View>
  );
};

export default HabitList;
