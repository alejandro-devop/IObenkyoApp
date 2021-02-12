import React from 'react';
import {View} from 'react-native';
import DialogBase from 'components/dialogs/dialog-base';
import {useStyles} from 'theme/hooks';
import Text from 'components/base/text';
import styles from './styles';
import ScrollView from 'components/commons/scrollview';

const Dialog = ({
  children,
  disableScroll,
  contentStyles,
  open,
  onClose,
  title,
}) => {
  const classes = useStyles(styles);
  return (
    <DialogBase contentStyles={contentStyles} open={open} onClose={onClose}>
      {Boolean(title) && (
        <View style={classes.titleWrapper}>
          <Text variant="subtitle" style={classes.title}>
            {title}
          </Text>
        </View>
      )}
      {children}
    </DialogBase>
  );
};

export default Dialog;
