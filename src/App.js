import React from 'react';
import {SessionProvider} from 'providers/session';
import ApiClient from 'providers/api';
import endpoints from 'config/endpoints';
import useAppEnv from 'hooks/use-app-env';

const App = () => {
  const {apiServer} = useAppEnv();
  return (
    <SessionProvider>
      <ApiClient server={apiServer} endpoints={endpoints}>
        {null}
      </ApiClient>
    </SessionProvider>
  );
};

export default App;
