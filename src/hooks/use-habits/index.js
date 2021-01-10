import useSession from 'pkgs/session/hooks/useSession';
import {useGet} from 'pkgs/api/hooks';
import {isEmpty} from 'utils';

const useHabits = (options = {}) => {
  const {lazy} = options;
  const {
    set,
    session: {habits = []},
  } = useSession();
  const {getData, refresh, loading, refreshing} = useGet('habits.list', {
    lazy,
    onCompleted: (data) => {
      if (!lazy) {
        set('habits', data);
      }
    },
  });

  return {
    habits: !isEmpty(habits) ? habits : [],
    loading,
    refresh,
    refreshing,
    getData,
  };
};

export default useHabits;
