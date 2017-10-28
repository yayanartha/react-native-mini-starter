import { Navigation } from 'react-native-navigation';

import { Drawer, LoadingLightBox } from './modules/_global';
import SplashScreen from './modules/SplashScreen';

export default (store, Provider) => {
	Navigation.registerComponent('ministarter.SplashScreen', () => SplashScreen, store, Provider);

	Navigation.registerComponent('ministarter.Drawer', () => Drawer, store, Provider);
	Navigation.registerComponent('ministarter.LoadingLightBox', () => LoadingLightBox, store, Provider);
};
