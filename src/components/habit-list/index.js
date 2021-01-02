import React from 'react';
import {View} from 'react-native';
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
  useGet('habits.list', {
    onCompleted: (data) => {
      set('habits', data);
    },
  });
  const openAdd = () => {
    navigation.navigate('add-habit');
  };
  return (
    <View style={classes.root}>
      <ScrollView style={classes.scroll}>
        {habits.map((item, key) => (
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
