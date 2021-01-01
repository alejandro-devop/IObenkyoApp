import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SessionHandler from './SessionHandler';
import DefaultLoader from './DefaultLoader';

export const SessionContext = React.createContext({});
const ContextProvider = SessionContext.Provider;

/**
 * This component creates a context to provide and update the application session.
 * it also gives functions to handle this updates.
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param children
 * @param Loader
 * @returns {*}
 * @constructor
 */
const SessionProvider = ({children, Loader}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [, setErrorInfo] = useState(null);
  const [session, setSession] = useState(null);

  const initialize = async () => {
    try {
      await SessionHandler.initialize();
      const sessionData = SessionHandler.getSession();
      setSession(sessionData);
      setLoading(false);
    } catch (e) {
      setError(true);
      setErrorInfo(e);
    }
  };

  useEffect(() => {
    initialize();
  }, []);
  const LoaderComponent = Loader || DefaultLoader;
  if (error) {
    // Todo: Render error
  }
  return loading ? (
    <LoaderComponent />
  ) : (
    <ContextProvider
      value={{
        session,
        set: (k, v) => {
          SessionHandler.setSession(k, v);
          setSession(SessionHandler.getSession());
        },
        setAll: (keys = {}) => {
          SessionHandler.setAll(keys);
          setSession(SessionHandler.getSession());
        },
        remove: (key) => {
          SessionHandler.remove(key);
          setSession(SessionHandler.getSession());
        },
        removeAll: (keys = []) => {
          SessionHandler.removeAll(keys);
          setSession(SessionHandler.getSession());
        },
        clear: () => {
          SessionHandler.clear();
          setSession(SessionHandler.getSession());
        },
      }}>
      {children}
    </ContextProvider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node,
  Loader: PropTypes.node,
};

export default SessionProvider;
