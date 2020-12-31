import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ActivityIndicator} from 'react-native';

/**
 * This component renders a default loader for the session
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @returns {*}
 * @constructor
 */
const DefaultLoader = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <ActivityIndicator size="large" />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safe: {
    flex: 1,
  },
};

export default DefaultLoader;
