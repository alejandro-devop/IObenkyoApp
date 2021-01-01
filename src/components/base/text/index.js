import React from 'react';
import PropTypes from 'prop-types';
import {Text as TextBase} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import classNames from 'utils/classNames';

/**
 * Component to render a text string
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param center
 * @param children
 * @param right
 * @param style
 * @param variant
 * @returns {*}
 * @constructor
 */
const Text = ({center, children, right, style, variant = 'text'}) => {
  const classes = useStyles(styles);
  return (
    <TextBase
      style={[
        classNames(
          {
            root: true,
            rootCenter: center,
            rootRight: right,
            rootCaption: variant === 'caption',
            rootParagraph: variant === 'paragraph',
            rootSubtitle: variant === 'subtitle',
            rootText: variant === 'text',
            rootTitle: variant === 'title',
          },
          classes,
        ),
        style,
      ]}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  right: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
  variant: PropTypes.oneOf([
    'caption',
    'paragraph',
    'subtitle',
    'text',
    'title',
  ]),
};

export default Text;
