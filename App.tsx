import React from 'react';

import MainScreen from './src/screens/Main';
import ThemeManager from './src/theme/ThemeManager';

const App = () => {
  return (
    <ThemeManager>
      <MainScreen />{/* here we would put navigation */}
    </ThemeManager>
  );
};

export default App;
