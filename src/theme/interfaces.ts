export interface Theme {
  isDarkTheme: string;
  setDarkTheme: Function;
}

// colors
export interface ColorsConfig {
  screenBG: string;
  title: string;
  switchColors: SwitchConfig;
  textInput: TextInputConfig;
  avatarBorder: string;
  activityIndicator: string;
  cardBG: string;
  overlayBG: string;

}

// buttons
export interface SwitchConfig {
  trackOff: string;
  trackOn: string;
  thumbOn: string;
  thumbOff: string;
}

export interface TextInputConfig {
  backgroundColor: string;
  textColor: string;
}
