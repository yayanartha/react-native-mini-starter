import { StyleSheet, Platform } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { responsiveWidth as rw } from 'react-native-responsive-dimensions';
import { colors } from '../constants';

export default () => {
    NativeTachyons.build({
        rem: rw(100) > 360 ? 24 : 16,
        colors: {
            palette: {
                white: '#ffffff',
                grey: '#6e6e6e',
                grey6: '#666666',
                grey9: '#999999',
                grey_soft: '#f5f5f5',
                grey_darken: '#333333',
                black: '#000000',
                teal: colors.TEAL,
                teal_soft: colors.TEAL_SOFT,
                maroon: colors.MAROON,
                blue: colors.BLUE,
                transparent: 'transparent',
            },
        },
        fonts: {
            roboto: 'Roboto-Regular',
            roboto_light: 'Roboto-Light',
            roboto_bold: 'Roboto-Bold',
        },
    }, StyleSheet);
};
