import { Navigation } from 'react-native-navigation';

import { Drawer, LoadingLightBox } from './modules/_global';
import SplashScreen from './modules/SplashScreen';

import Login from './modules/Login/Login';
import Register from './modules/Login/Register';
import ForgotPassword from './modules/Login/ForgotPassword';

import Dashboard from './modules/Dashboard/Dashboard';

export const registerScreens = (store, Provider) => {
	Navigation.registerComponent('bitspinner.SplashScreen', () => SplashScreen, store, Provider);

	Navigation.registerComponent('bitspinner.Drawer', () => Drawer, store, Provider);
	Navigation.registerComponent('bitspinner.LoadingLightBox', () => LoadingLightBox, store, Provider);

	Navigation.registerComponent('bitspinner.Login', () => Login, store, Provider);
	Navigation.registerComponent('bitspinner.Register', () => Register, store, Provider);
	Navigation.registerComponent('bitspinner.ForgotPassword', () => ForgotPassword, store, Provider);

	Navigation.registerComponent('bitspinner.Dashboard', () => Dashboard, store, Provider);
};
