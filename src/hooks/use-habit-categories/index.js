import {useGet} from 'pkgs/api/hooks';
import useSession from 'pkgs/session/hooks/useSession';

const useHabitCategories = (options = {}) => {
  const {lazy} = options;
  const {
    session: {habitCategories = []},
    set,
  } = useSession();
  const {loading, refresh, getData} = useGet('habitCategories.list', {
    lazy,
    onCompleted: (data) => {
      set('habitCategories', data);
    },
  });
  return {
    getData,
    loading,
    habitCategories,
    refresh,
  };
};

export default useHabitCategories;
