import {Platform, PixelRatio} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS = {
};


export const FONTS = {
};

export const LINE_HEIGHTS = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
};

export const COLORS = {
  // default text color
  text: '#272727',

  // base colors
  /** UI color for #primary */
  primary: '#2d2f7f',
  /** UI color for #secondary */
  secondary: '#2cda9d', // '#8392AB',
  /** UI color for #tertiary */
  tertiary: '#ffd95e',

  // non-colors
  black: '#252F40',
  white: '#FFFFFF',

  dark: '#252F40',
  light: '#E9ECEF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

  // colors variations
  /** UI color for #danger */
  danger: '#ff5b44',
  /** UI color for #warning */
  warning: '#FFC107',
  /** UI color for #success */
  success: '#82D616',
  /** UI color for #info */
  info: '#17C1E8',

  /** UI colors for navigation & card */
  card: '#f3f3f3',
  background: '#E9ECEF',

  /** UI color for shadowColor */
  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.3)',

  /** UI color for input borderColor on focus */
  focus: '#E293D3',
  input: '#252F40',

  /** UI color for switch checked/active color */
  switchOn: '#3A416F',
  switchOff: '#E9ECEF',

  /** UI color for checkbox icon checked/active color */
  checkbox: ['#3A416F', '#141727'],
  checkboxIcon: '#FFFFFF',

  /** social colors */
  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',
  googlePlus: '#DD4B39',

  /** icon tint color */
  icon: '#8392AB',

  /** blur tint color */
  blurTint: 'light',

  /** product link color */
  link: '#CB0C9F',

  green: "#00AB55",

  greyishBrownColor: "#585858",
  lightNavyBlueColor: "#2d2f7f",
  eucalyptusGreenColor: "#2cda9d",
  darkBlueGreyColor: "#191a47",
  darkBlueGreyTwoColor: "#20215a",
  lightishGreyColor: "#d8d8d8",
  lightGreyColor: "#f3f3f3",
  brightLightBlueColor: "#2acfff",
  darkSkyBlueColor: "#2c77e5",
  turquoiseBlueColor: "#00a3bd",
  lightTealColor: "#7de2d1",
  vomitYellowColor: "#c3d30e",
  yellowColor: "#ffd95e",
  warmPinkColor: "#fc4984",
  bubblegumPinkColor: "#ff88f1",
  brightPurpleColor: "#bc01ff",
  cornflowerBlueColor: "#5770d1",
  whiteColor: "#ffffff",
  velvetColor: "#660c63",
  blackColor: "#111111",
  coralColor: "#ff5b44",
  mediumGreyColor: "#cecece",
  shadowColor: "rgba(0, 0, 0, 0.1)",
  imageBgColor: "#C1C1C1",
  headerBgColor: "#A5A5A5",
  transparent: "transparent",
  textColor: "#272727",
  dividerColor: "#F2F2F2",
  dialogBackdropColor: "rgba(0, 0, 0, 0.7)",
  blackFifteenColor: "rgba(0, 0, 0, 0.1)",
  blackTwentyColor: "rgba(0, 0, 0, 0.2)",
  blackThirtyColor: "rgba(0, 0, 0, 0.3)",

  whiteZeroColor: "rgba(255, 255, 255, 0)",
  transparentGray: 'rgba(218, 218, 218, 0.8)',

  green: "#1baa43",
  lightGreen: "#0f7e4a",
  lightGreen2: "#18945a",
  lighterGreen: "#2ba56a",
  leaveGreen: "#18a561",
  water: "#6f8bc8",
  straw: "#e55d4b",
  bluegreen: "#2CB9B0",
};

export const GRADIENTS = {
  primary: ['#2d2f7f', '#2acfff'],
  secondary: ['#2cda9d', '#1baa43'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],

  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],

  divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
    'rgba(255, 255, 255, 0.2)',
    'rgba(112, 125, 149, 0.5)',
    'rgba(255, 255, 255, 0.2)',
  ],
};

export const SIZES = {
  // global sizes
  base: 8,
  text: 12,
  radius: 4,
  padding: 20,

  // font sizes
  h1: 44,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 18,
  p: 16,

  // button sizes
  buttonBorder: 1,
  buttonRadius: 8,
  socialSize: 64,
  socialRadius: 16,
  socialIconSize: 26,
  iconSize: 26,

  // button shadow
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 7,
  shadowOpacity: 0.07,
  shadowRadius: 4,
  elevation: 2,

  // input sizes
  inputHeight: 42,
  inputBorder: 1,
  inputRadius: 8,
  inputPadding: 12,

  // card sizes
  cardRadius: 16,
  cardPadding: 10,

  // image sizes
  imageRadius: 14,
  avatarSize: 32,
  avatarRadius: 8,

  // switch sizes
  switchWidth: 50,
  switchHeight: 24,
  switchThumb: 20,

  // checkbox sizes
  checkboxWidth: 18,
  checkboxHeight: 18,
  checkboxRadius: 5,
  checkboxIconWidth: 10,
  checkboxIconHeight: 8,

  // product link size
  linkSize: 12,

  /** font size multiplier: for maxFontSizeMultiplier prop */
  multiplier: 2,
};

export const SPACING = {
  /** xs: 4px */
  xs: SIZES.base * 0.5,
  /** s: 8px */
  s: SIZES.base * 1,
  /** sm: 16px */
  sm: SIZES.base * 2,
  /** m: 24px */
  m: SIZES.base * 3,
  /** md: 32px */
  md: SIZES.base * 4,
  /** l: 40px */
  l: SIZES.base * 5,
  /** xl: 48px */
  xl: SIZES.base * 6,
  /** xxl: 56px */
  xxl: SIZES.base * 7,

  tiny: moderateScale(SIZES.base * 0.4),
  small: moderateScale(SIZES.base * 0.8),
  medium: moderateScale(SIZES.base * 1.2),
  large: moderateScale(SIZES.base * 1.6),
  extraLarge: moderateScale(SIZES.base * 2.4),
};

export const fontScaleCaps = {
  uber: 1,
  h1: 1,
  h2: 22 / 18,
  h3: 20 / 16,
  h4: 20 / 16,
  text: 20 / 16,
  small: 18 / 14,
  xSmall: 14 / 12,
  price: 18 / 14,
  tabBarItem: 13 / 12
};

/**
 * React Native scales font (fontSize and lineHeight) automatically based on
 * the user selected scale (retrievable by PixelRatio.getFontScale()).
 *
 * This function ensures, that the font can not scale beyond the specified
 * maximum scale. This is achieved by returning a proportial recuded font size
 * when the scale is above the specified cap.
 */
export const scaleFont = (type, base) => {
  const fontScale = PixelRatio.getFontScale();
  const fontScaleCap = fontScaleCaps[type];
  if (fontScale > fontScaleCap) {
    const max = base * fontScaleCap;
    return max / fontScale;
  }
  return base;
};

/**
 * All other style props (except fontSize and lineHeight) are not affected by
 * the user selected font scale. However, sometimes it is helpful to scale a
 * view based on the text size of its children.
 *
 * This function returns a size scaled with the user selected font scale but
 * capped by the maximum scale of the specified text type.
 */
export const scaleWithFont = (type, base) => {
  const fontScale = PixelRatio.getFontScale();
  const fontScaleCap = fontScaleCaps[type];
  return base * Math.min(fontScale, fontScaleCap);
};

export const THEME = {
  icons: ICONS,
  assets: {...ICONS},
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: {...SIZES, ...SPACING},
  colors: COLORS,
  gradients: GRADIENTS,
};
