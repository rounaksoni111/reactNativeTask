import { memo } from 'react';
import {ActivityIndicator, View, Dimensions} from 'react-native';
import useTheme from '../../hooks/useTheme';

const {width, height} = Dimensions.get('window');

const Loader = ({ background }) => {
  const {colors, sizes} = useTheme();
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        width,
        height,
        backgroundColor: background || colors.transparentGray,
        zIndex: 1001,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default memo(Loader);
