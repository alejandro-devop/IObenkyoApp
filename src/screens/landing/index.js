import React, {useState} from 'react';
import LandingLayout from 'screens/layouts/landing-layout';
import {Card} from 'components/containers';
import TextField from 'components/controls/text-field';
import PasswordField from 'components/controls/password-field';

const LandingScreen = () => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
  });
  const onChange = ({target: {name, value}}) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const {userName, password} = form;
  return (
    <LandingLayout>
      <Card>
        <TextField
          label="User name"
          name="userName"
          onChange={onChange}
          placeholder="Enter your user name"
          value={userName}
        />
        <PasswordField
          label="Password"
          name="password"
          onChange={onChange}
          placeholder="Enter your password"
          value={password}
        />
      </Card>
    </LandingLayout>
  );
};

export default LandingScreen;
