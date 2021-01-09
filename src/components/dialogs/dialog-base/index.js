import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import CloseButton from 'components/dialogs/dialog-base/CloseButton';

const DialogBase = ({
  disableCloseButton,
  disableClose = true,
  children,
  onClose,
  animationType = 'fade',
  open,
  backdropStyles,
  contentStyles,
}) => {
  const classes = useStyles(styles);
  const content = (
    <View style={[classes.contentWrapper, contentStyles]}>
      {!disableCloseButton && <CloseButton onPress={onClose} />}
      {children}
    </View>
  );
  return (
    <Modal
      animationType={animationType}
      onRequestClose={onClose}
      transparent
      modal={classes.modal}
      visible={open}>
      {!disableClose && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={[classes.backDrop, backdropStyles]}>
          {content}
        </TouchableOpacity>
      )}
      {disableClose && (
        <View style={[classes.backDrop, backdropStyles]}>{content}</View>
      )}
    </Modal>
  );
};

export default DialogBase;
