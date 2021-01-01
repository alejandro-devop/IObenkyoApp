import React from 'react';
import useSession from 'hooks/use-session';
import ApiService from './ApiService';

export const ApiContext = React.createContext(null);
const ContextProvider = ApiContext.Provider;

const ApiClient = ({children}) => {
  // const {
  //
  // } = useSession();
  // if (tokenInfo.accessToken) {
  //   ApiService.setToken(tokenInfo.accessToken);
  // }
  return <ContextProvider value={ApiService}>{children}</ContextProvider>;
};

export default ApiClient;
