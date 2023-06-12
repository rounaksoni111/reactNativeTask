import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isSmallDevice = screenWidth < 375;


/**
 * All the dimension related to sizes, should be stored here
 */

const DIMENS = Object.freeze({
  /**
   * App level constants common among all components
   */
  isSmallDevice,
  screen: {
    width: screenWidth,
    height: screenHeight,
  },
  common: {
    WINDOW_WIDTH: screenWidth,
    WINDOW_HEIGHT: screenHeight,
    cartItemCountFontSize: moderateScale(10),
    borderWidth: moderateScale(StyleSheet.hairlineWidth),
    appbarIconSize: moderateScale(23),
    borderRadius: 2,
    iconSize: 23,
    checkboxIconSize: 23,
    textInputHeight: 40,
  },
  cartScreen: {
    imageSize: moderateScale(100),
  },
  categoryListItem: {
    imageWidth: moderateScale(70),
    imageHeight: moderateScale(70),
  },
  homeScreen: {
    carouselHeight: moderateScale(200),
  },
  productDetailScreen: {
    configurableOptionValueBoxSize: moderateScale(46),
  },

  /**
   * Constants related to AddressScreen
   */
  addressScreen: {
    emptyImageSize: 150,
  },
  /**
   * Constants related to AlertDialog
   */
  alertDialog: {
    descriptionFontSize: 16,
  },
  /**
   * Constants related to CartScreen
   */
  cartScreen: {
    imageSize: 120,
    emptyCartImageSize: 150,
    totalPriceFontSize: 18,
  },
  /**
   * Constants related to DrawerScreen
   */
  drawerScreen: {
    headerHeight: 100,
  },
  /**
   * Constants related to HomeScreen
   */
  homeScreen: {
    sliderHeight: 200,
  },
  /**
   * Constants related to LoginScreen
   */
  loginScreen: {
    loginImageSize: 150,
  },
  /**
   * Constants related to MediaViewer
   */
  mediaViewer: {
    closeIconSize: 30,
    paginationFontSize: 12,
  },
  /**
   * Constants related to ProductScreen
   */
  productScreen: {
    imageSliderHeight: 300,
    priceFontSize: 18,
  },
  /**
   * Constants related to OrderAcknowledgementScreen
   */
  orderAcknowledgementScreen: {
    orderImageSize: 180,
  },
  /**
   * Constants related to OrdersScreen
   */
  ordersScreen: {
    productWidth: 70,
    productHeight: 100,
  },
  catalogGridItemWidth: 150,
  catalogGridItemHeight: 200,
  catalogGridItemImageHeight: 120,
  optionBoxMinHeight: 100,
});

export default DIMENS;
