import {Platform, PixelRatio, Dimensions} from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

const isTabletFn = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isTablet = isTabletFn();
export const deviceHeight = height;
export const deviceWidth = width;
