import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import Icon from 'components/base/icon';
import Slide from 'components/anims/slide';
import Text from 'components/base/text';
import classNames from 'utils/classNames';

const HabitItem = ({delay = 0, habitItem = {}, onPress}) => {
  const classes = useStyles(styles);
  const {
    streak_count: streak,
    streak_goal: goal,
    should_keep: keep,
    should_avoid: avoid,
    category = {},
    title,
  } = habitItem;
  return (
    <Slide delay={delay} direction="left" style={classes.root}>
      <TouchableOpacity onPress={onPress} style={classes.wrapper}>
        <View style={classes.iconWrapper}>
          <Icon name={category.icon} />
        </View>
        <View style={classes.textWrapper}>
          <Text style={classes.text}>{title}</Text>
        </View>
        <View style={classes.streakWrapper}>
          <Text style={classes.textCounter}>
            {streak} / {goal}
          </Text>
        </View>
        <View style={classes.typeWrapper}>
          <Icon
            name={keep ? 'plus' : 'minus'}
            style={classNames(
              {
                typeIcon: true,
                typeIconKeep: Boolean(keep),
                typeIconAvoid: Boolean(avoid),
              },
              classes,
            )}
          />
        </View>
      </TouchableOpacity>
    </Slide>
  );
};

export default HabitItem;
