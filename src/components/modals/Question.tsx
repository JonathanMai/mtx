import React from 'react';
import {WebView} from 'react-native-webview';
import {useIsDarkTheme} from '../../theme/ThemeManager';

import Modal from './';

type Props = {
  modalURL: string;
  onClose: Function;
}

const Question = ({modalURL, onClose}: Props) => {
  const isDarkMode = useIsDarkTheme();

  return (
    <Modal visible={modalURL?.length > 0} onClose={onClose}>
      <WebView
        source={{
          uri: modalURL,
        }}
        forceDarkOn={isDarkMode}
        startInLoadingState
      />
    </Modal>
  );
};

export default Question;
