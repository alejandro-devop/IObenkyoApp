import {REACT_APP_API_SERVER} from '@env';

/**
 * Hook to access environment variables
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @returns {{apiServer: *}}
 */
const useAppEnv = () => {
  return {
    apiServer: REACT_APP_API_SERVER,
  };
};

export default useAppEnv;
