import React, {createContext, useState, useContext, ReactElement, useEffect} from 'react';
import {useColorScheme, StatusBar, View, SafeAreaView} from 'react-native';
import ThemeSwitch from '../components/buttons/switch/ThemeSwitch';
import * as themes from './Colors';
import {ColorsConfig} from './interfaces';

export const ThemeContext = createContext(null);

const ThemeManager = ({children}: {children: ReactElement}) => {

  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  useEffect(() => {
    const darkTheme = useColorScheme === 'dark';
    setDarkTheme(darkTheme);
  }, [])  
  
  return (
    <ThemeContext.Provider value={[isDarkTheme, setDarkTheme]}>
      <StatusBar barStyle={`${isDarkTheme ? 'light' : 'dark'}-content`} />
      <ScreenWrapper>
        {children}
      </ScreenWrapper>
    </ThemeContext.Provider>
  );
};

export default ThemeManager;

const ScreenWrapper = ({children}: {children: ReactElement}) => {
  const {screenBG} = useColors();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: screenBG}}>
      <View style={{alignSelf: 'flex-end', marginRight: 15}}>
        <ThemeSwitch />
      </View>
      {children}
    </SafeAreaView>
  );
};

//hooks
export const useColors = (): ColorsConfig => {
  const [isDarkMode] = useContext(ThemeContext);

  return themes[`${isDarkMode ? 'dark' : 'light'}Theme`];
};

export const useThemeToggle = (): Function => {
  const [isDarkMode, setDarkTheme] = useContext(ThemeContext);
  const toggle = (): void => setDarkTheme(!isDarkMode);

  return toggle;
};

export const useIsDarkTheme = (): boolean => {
  const [isDarkMode, setDarkTheme] = useContext(ThemeContext);

  return isDarkMode;
};
