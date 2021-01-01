import {useContext} from 'react';
import {SessionContext} from '../SessionProvider';

/**
 * This hook allows to access the session storage
 * @returns {{removeAll: *, set: *, session: *, clear: *, setAll: *, remove: *}}
 */
const useSession = () => {
  const {session = {}, set, setAll, remove, removeAll, clear} = useContext(
    SessionContext,
  );
  return {
    session,
    set,
    setAll,
    remove,
    removeAll,
    clear,
  };
};

export default useSession;
