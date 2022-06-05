import {ColorsConfig, SwitchConfig} from './interfaces';

const switchColors: SwitchConfig = {
  trackOff: 'black',
  thumbOff: 'white',
  trackOn: 'white',
  thumbOn: 'black',
};

export const lightTheme: ColorsConfig = {
  screenBG: 'white',
  title: 'black',
  switchColors: switchColors,
  textInput: {
    backgroundColor: 'lightgrey',
    textColor: 'black',
  },
  avatarBorder: 'black',
  activityIndicator: 'black',
  cardBG: 'lightgrey',overlayBG:'black'

};

export const darkTheme: ColorsConfig = {
  screenBG: 'black',
  title: 'white',
  switchColors: switchColors,
  textInput: {
    backgroundColor: 'darkgrey',
    textColor: 'white',
  },
  avatarBorder: 'white',
  activityIndicator: 'white',
  cardBG: 'darkgrey',
  overlayBG:'black'
};
