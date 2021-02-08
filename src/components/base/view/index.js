import React from 'react';
import {View as ViewBase, SafeAreaView} from 'react-native';

const View = ({children, safe, style}) => {
  const Component = safe ? SafeAreaView : ViewBase;
  return <Component style={style}>{children}</Component>;
};

export default View;
