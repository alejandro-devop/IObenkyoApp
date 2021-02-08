import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from './ThemeProvider';
import {mixStyles} from 'theme/functions';
import DeviceInfo from 'react-native-device-info';

const initializeStyles = ({styles: themeClasses, ...context}, styles) => {
  let processedStyles = {};
  const states = {
    hasNotch: DeviceInfo.hasNotch(),
  };
  if (styles instanceof Function) {
    processedStyles = StyleSheet.create(
      styles({...context, styles: themeClasses, mixStyles, states}) || {},
    );
  } else if (styles instanceof Object) {
    processedStyles = StyleSheet.create(styles);
  } else {
    processedStyles = {};
  }
  return {...processedStyles};
};

/**
 * This hook allows to access the global styles from the theme.
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param {*} styles
 */
export const useStyles = (styles) => {
  const context = useContext(ThemeContext);
  return initializeStyles(context, styles);
};
