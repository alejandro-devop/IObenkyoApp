import React from 'react';
import useSession from 'hooks/use-session';
import ApiService from './ApiService';

export const ApiContext = React.createContext(null);
const ContextProvider = ApiContext.Provider;

const ApiClient = ({children, server = '', endpoints = {}}) => {
  const {session} = useSession();
  const {token} = session;
  ApiService.setServer(server);
  ApiService.setEndpoints(endpoints);
  if (token) {
    ApiService.setToken(token);
  }
  return <ContextProvider value={ApiService}>{children}</ContextProvider>;
};

export default ApiClient;
