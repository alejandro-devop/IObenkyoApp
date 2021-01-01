import 'react-native-gesture-handler';
import React from 'react';
import {SessionProvider} from 'providers/session';
import ApiClient from 'providers/api';
import endpoints from 'config/endpoints';
import useAppEnv from 'hooks/use-app-env';
import {ThemeProvider, basicTheme} from 'theme';
import AppNavigator from 'navigation';

const App = () => {
  const {apiServer} = useAppEnv();
  return (
    <SessionProvider>
      <ApiClient server={apiServer} endpoints={endpoints}>
        <ThemeProvider theme={basicTheme}>
          <AppNavigator />
        </ThemeProvider>
      </ApiClient>
    </SessionProvider>
  );
};

export default App;
