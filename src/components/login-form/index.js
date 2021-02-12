import React, {useState} from 'react';
import Form from './Form';
import {useApi, usePost} from 'pkgs/api/hooks';
import useSession from 'pkgs/session/hooks/useSession';
import useErrorReporter from 'hooks/use-error-reporter';

const LoginForm = () => {
  const [loading, sendRequest] = usePost('auth.login');
  const [error, setError] = useState(false);
  const reportError = useErrorReporter({
    filePath: 'src/components/login-form/index.js',
  });
  const {setAll} = useSession();
  const {clearToken} = useApi();
  const handleSubmit = async (form = {}) => {
    try {
      const {userName, password} = form;
      const response = await sendRequest({email: userName, password});
      const {message, access_token: token, user = {}} = response;
      if (token) {
        setError(null);
        clearToken();
        setAll({
          logged: true,
          token,
          user,
        });
      } else {
        setError(message);
      }
    } catch (e) {
      reportError(e, {
        code: 'IO-01X0001',
        message: 'Error while authenticating the user',
      });
    }
  };
  // Todo: Validate email
  return <Form onSubmit={handleSubmit} error={error} isLoading={loading} />;
};

export default LoginForm;
