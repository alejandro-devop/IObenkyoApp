import React from 'react';
import Form from './form';
import useNavigate from 'hooks/use-navigate';
import {usePost} from 'pkgs/api/hooks';
import moment from 'moment';

const HabitAdd = () => {
  const {goBack} = useNavigate();
  const [loading, sendRequest] = usePost('habits.save');
  const handleSubmit = async (form) => {
    try {
      const {
        category,
        counter,
        days,
        description,
        isCounter,
        keep,
        startDate,
        title,
      } = form;
      const goalDateObj = moment(startDate, 'YYYY-MM-DD').add(days, 'days');
      await sendRequest({
        category,
        counter_goal: counter,
        description,
        goal_date: goalDateObj.format('YYYY-MM-DD'),
        is_counter: isCounter,
        should_keep: keep,
        should_avoid: !keep,
        start: startDate,
        streak_goal: days,
        title,
      });
      // Todo: print messages
      goBack();
    } catch (e) {
      // Todo: handle error
    }
  };
  return <Form onSubmit={handleSubmit} isLoading={loading} />;
};

export default HabitAdd;
