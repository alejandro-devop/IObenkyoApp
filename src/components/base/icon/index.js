import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {useStyles} from 'theme/hooks';

/**
 * This component allows to render an icon using the `react-native-vector-icons` library
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param name
 * @param size
 * @param style
 * @returns {*}
 * @constructor
 */
const Icon = ({name, size = 30, style = {}}) => {
  const classes = useStyles(styles);
  return <IconBase name={name} size={size} style={[classes.root, style]} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Icon;
