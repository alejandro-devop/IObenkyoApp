import React, {useState} from 'react';
import Form from './Form';
import {usePost} from 'pkgs/api/hooks';

const LoginForm = () => {
  const [loading, sendRequest] = usePost('auth.login');
  const [error, setError] = useState(false);
  const handleSubmit = async (form = {}) => {
    try {
      const {userName, password} = form;
      const response = await sendRequest({email: userName, password});
      const {message, access_token: token} = response;
      console.log('Response: ', response);
      if (token) {
        setError(null);
      } else {
        setError(message);
      }
    } catch (e) {
      console.log('Error: ', e);
      // Todo: Handle error
    }
  };
  // Todo: Validate email
  return <Form onSubmit={handleSubmit} error={error} isLoading={loading} />;
};

export default LoginForm;
