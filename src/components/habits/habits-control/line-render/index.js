import React from 'react';
import {View} from 'react-native';
import Text from 'components/base/text';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import _ from 'lodash';
import DayRender from '../day-render';
import Icon from 'components/base/icon';
import classNames from 'utils/classNames';

const LineRender = ({startDay, days = 7, habit = {}, onSelectDay}) => {
  const {title, streak_count, streak_goal, should_keep, should_avoid} = habit;
  const classes = useStyles(styles);

  return (
    <View style={classes.root}>
      <View style={classes.titleWrapper}>
        <Icon
          name={should_keep ? 'plus' : 'minus'}
          style={classNames(
            {
              icon: true,
              iconPositive: Boolean(should_keep),
              iconNegative: Boolean(should_avoid),
            },
            classes,
          )}
        />
        <Text variant="subtitle" style={classes.title}>
          {title}
        </Text>
        <View>
          <Text variant="subtitle" style={classes.title}>
            ({`${streak_count} / ${streak_goal}`})
          </Text>
        </View>
      </View>
      <View style={classes.daysWrapper}>
        {_.times(days, (key) => (
          <DayRender
            onSelectDay={onSelectDay}
            habit={habit}
            day={key}
            startDay={startDay}
            key={`habit-day-${habit.id}-${key}`}
            isLast={key === days - 1}
          />
        ))}
      </View>
    </View>
  );
};

export default LineRender;
