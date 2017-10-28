import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import { buildTachyons, configureStore } from './utils';

// Build the Tachyons CSS
buildTachyons();

const store = configureStore();

registerScreens(store, Provider);

export default class App {
    constructor() {
        // Disable on screen warning while in debug mode
        console.disableYellowBox = true;
        // Run app (single screen)
        this.runApp();
    }
    runApp() {
        Navigation.startSingleScreenApp({
            screen: { screen: 'ministarter.SplashScreen' },
        });
    }
}
