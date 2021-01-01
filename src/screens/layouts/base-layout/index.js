import React from 'react';
import {StatusBar} from 'react-native';

const BaseLayout = ({children, statusColor = 'dark-content'}) => {
  return (
    <>
      <StatusBar barStyle={statusColor} />
      {children}
    </>
  );
};

export default BaseLayout;
