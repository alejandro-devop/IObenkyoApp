import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useSession from 'hooks/use-session';
import UnAuthenticatedPages from 'navigation/UnAuthenticatedPages';
import AuthenticationPages from 'navigation/AuthenticationPages';
import TestAreaPages from 'navigation/TestAreaPages';

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
  const test = true;
  return (
    <NavigationContainer>
      {!logged && <UnAuthenticatedPages />}
      {logged && <AuthenticationPages />}
    </NavigationContainer>
  );
};

export default AppNavigator;
