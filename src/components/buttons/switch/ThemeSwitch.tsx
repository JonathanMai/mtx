import React from 'react';
import Switch from './';
import {useIsDarkTheme,useThemeToggle } from '../../../theme/ThemeManager';

const ThemeSwitch = () => {

  const isDarkTheme = useIsDarkTheme();
  const toggleSwitch = useThemeToggle();
  

  return <Switch direction="bottom" label={`${isDarkTheme ? 'dark' : 'light'} theme`} enabled={isDarkTheme} toggleSwitch={toggleSwitch} />;
};

export default ThemeSwitch;
