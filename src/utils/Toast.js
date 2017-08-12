import { AlertIOS, ToastAndroid, Platform } from 'react-native';

export default (msg, title = null, error = false) => {
    let message = msg;

    if (error) {
        /* For debuging purpose. Comment if unnecessary */
        console.warn(msg);
        
        message = msg.message;
    }

    if (Platform.OS === 'ios') {
        AlertIOS.alert(title, message);
    } else {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
};
