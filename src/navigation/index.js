import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useSession from 'hooks/use-session';
import UnAuthenticatedPages from 'navigation/UnAuthenticatedPages';
import AuthenticationPages from 'navigation/AuthenticationPages';

/**
 * This component holds all application navigation pages.
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @returns {*}
 * @constructor
 */
const AppNavigator = () => {
  const {session = {}} = useSession();
  const {logged} = session;
  return (
    <NavigationContainer>
      {!logged && <UnAuthenticatedPages />}
      {logged && <AuthenticationPages />}
    </NavigationContainer>
  );
};

export default AppNavigator;
