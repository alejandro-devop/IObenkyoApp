import React from 'react';
import useSession from 'hooks/use-session';
import ApiService from './ApiService';

export const ApiContext = React.createContext(null);
const ContextProvider = ApiContext.Provider;

/**
 * This component allows to connect directly with the api service, it also handles the authentication using te session
 * storage service.
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param children
 * @param server
 * @param endpoints
 * @returns {*}
 * @constructor
 */
const ApiClient = ({children, server = '', endpoints = {}}) => {
  const {session} = useSession();
  const {token} = session;
  ApiService.setServer(server);
  ApiService.setEndpoints(endpoints);
  if (token && !ApiService.token) {
    ApiService.setToken(token);
  }
  return <ContextProvider value={ApiService}>{children}</ContextProvider>;
};

export default ApiClient;
