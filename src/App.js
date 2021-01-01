import 'react-native-gesture-handler';
import React from 'react';
import {SessionProvider} from 'providers/session';
import ApiClient from 'providers/api';
import endpoints from 'config/endpoints';
import useAppEnv from 'hooks/use-app-env';
import AppNavigator from 'navigation';

const App = () => {
  const {apiServer} = useAppEnv();
  return (
    <SessionProvider>
      <ApiClient server={apiServer} endpoints={endpoints}>
        <AppNavigator />
      </ApiClient>
    </SessionProvider>
  );
};

export default App;
