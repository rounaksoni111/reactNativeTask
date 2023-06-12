import { memo } from 'react';
import PropTypes from 'prop-types';
import {
    MaterialCommunityIcons,
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from "@expo/vector-icons";

const Icons = {
    'MaterialCommunityIcons': MaterialCommunityIcons,
    'AntDesign': AntDesign,
    'Entypo': Entypo,
    'EvilIcons': EvilIcons,
    'Feather': Feather,
    'FontAwesome': FontAwesome,
    'FontAwesome5': FontAwesome5,
    'Fontisto': Fontisto,
    'Foundation': Foundation,
    'Ionicons': Ionicons,
    'MaterialIcons': MaterialIcons,
    'Octicons': Octicons,
    'SimpleLineIcons': SimpleLineIcons,
    'Zocial': Zocial
};

ExpoIcons.propTypes = {
    iconType: PropTypes.oneOf([
        'MaterialCommunityIcons',
        'AntDesign',
        'Entypo',
        'EvilIcons',
        'Feather',
        'FontAwesome',
        'FontAwesome5',
        'Fontisto',
        'Foundation',
        'Ionicons',
        'MaterialIcons',
        'Octicons',
        'SimpleLineIcons',
        'Zocial'
    ]).isRequired,
    name: PropTypes.string,
    color: PropTypes.any,
    size: PropTypes.number,
    iconStyle: PropTypes.object,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    onPress: PropTypes.func
};

function ExpoIcons({
    iconType = 'MaterialCommunityIcons',
    name = 'star-face',
    color = 'white',
    size = 20,
    iconStyle = { marginRight: 10 },
    backgroundColor = '#007AFF',
    borderRadius = 5,
    onPress
}) {

    const key = Object.keys(Icons).find((key) => key === iconType);

    const Icon = Icons[key];
    return (
      <Icon
          name={name}
          color={color}
          size={size}
          style={iconStyle}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          {...(typeof onPress === 'function' ? { onPress: onPress } : {})}
      />
    )
};

const ExpoIcon = memo(ExpoIcons);
export { ExpoIcon };
