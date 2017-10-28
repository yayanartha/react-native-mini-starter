import { Dimensions } from 'react-native';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size, screen = Dimensions.get('window')) => {
    return screen.width / guidelineBaseWidth * size;
};
const verticalScale = (size, screen = Dimensions.get('window')) => {
    return screen.height / guidelineBaseHeight * size;
};
const moderateScale = (size, factor = 0.5) => {
    return size + (scale(size) - size) * factor;
};

export { scale, verticalScale, moderateScale };
