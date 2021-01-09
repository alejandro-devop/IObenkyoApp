import React from 'react';
import PropTypes from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {ScrollView as ScrollViewBase} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';

/**
 * This component renders a scroll view with custom styles
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param children
 * @param disableScroll
 * @param onScroll
 * @param scrollEventThrottle
 * @param refreshControl
 * @returns {*}
 * @constructor
 */
const ScrollView = ({
  children,
  useKeyboard,
  onScroll,
  scrollEventThrottle,
  refreshControl,
  style,
}) => {
  const classes = useStyles(styles);
  if (useKeyboard) {
    return (
      <KeyboardAwareScrollView
        refreshControl={refreshControl}
        onScroll={onScroll}
        scrollEventThrottle={scrollEventThrottle}
        showsVerticalScrollIndicator={false}
        style={[classes.root, style]}
        contentContainerStyle={classes.scroll}>
        {children}
      </KeyboardAwareScrollView>
    );
  }
  return (
    <ScrollViewBase
      refreshControl={refreshControl}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
      showsVerticalScrollIndicator={false}
      style={[classes.root, style]}
      contentContainerStyle={classes.scroll}>
      {children}
    </ScrollViewBase>
  );
};

ScrollView.propTypes = {
  children: PropTypes.node,
  useKeyboard: PropTypes.bool,
  refreshControl: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

export default ScrollView;
