import React, {ReactElement} from 'react';
import {SafeAreaView, Modal as RNModal, TouchableOpacity} from 'react-native';

import {useColors} from '../../theme/ThemeManager';

type Props = {
  onClose: Function;
  visible: boolean;
  children: ReactElement;
};

const Modal = ({onClose, visible, children}: Props) => {
  const {overlayBG} = useColors();

  return (
    <RNModal
      transparent
      visible={visible}
      onRequestClose={onClose}
      onTou
      animationType="fade">
      <TouchableOpacity
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: overlayBG,
          opacity: 0.5,
          zIndex: 1,
        }}
        activeOpacity={0.5}
        onPress={onClose}
      />
      <SafeAreaView
        style={{
          marginHorizontal: '7%',
          marginVertical: '30%',
          flex: 1,
          overflow: 'hidden',
          zIndex: 2,
        }}>
        {children}
      </SafeAreaView>
    </RNModal>
  );
};

export default Modal;
