import React, {useState} from 'react';
import LandingLayout from 'screens/layouts/landing-layout';
import LoginForm from 'components/login-form';

const LandingScreen = () => {
  return (
    <LandingLayout>
      <LoginForm />
    </LandingLayout>
  );
};

export default LandingScreen;
