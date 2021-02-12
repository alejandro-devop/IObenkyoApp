import React, {useState, useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import BaseLayout from 'screens/layouts/base-layout';
import HeaderEmpty from 'screens/layouts/components/header-empty';
import imageBg from 'assets/backgrounds/pattern-black.png';

const InsidesLayout = ({children, icon, title}) => {
  const classes = useStyles(styles);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);
  return (
    <BaseLayout statusColor="light-content">
      <HeaderEmpty icon={icon} title={title} />
      {!loaded && <View style={[classes.image, classes.overlay]} />}
      <ImageBackground
        onLoad={() => setLoaded(true)}
        source={imageBg}
        style={classes.image}
      />
      <View style={classes.root}>
        {typeof children === 'function' ? children(ready) : children}
      </View>
    </BaseLayout>
  );
};

export default React.memo(InsidesLayout);
