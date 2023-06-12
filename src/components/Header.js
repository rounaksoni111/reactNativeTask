// @flow
import React from "react";
import { ContentPadding } from "./ContentPadding";
import Text from "./Text";
import Block from "./Block";
import { ExpoIcon } from "./Icons";
import { TouchableOpacity } from "react-native";

const Header = ({ leftElement,  title, rightElement }) => (
  <Block flex={0} color={'#1c1f1c'}>
    <ContentPadding
      style={{
        height: 48,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        maxWidth: 440,
        width: "100%"
      }}
    >
      <Block flex={1} align="flex-start" marginRight="auto">
        {leftElement}
      </Block>
      <Block flex={0} align="center" paddingTop={4}>
        <Text h5 white bold>
          {title}
        </Text>
      </Block>
      <Block flex={1} align="flex-end" marginLeft="auto">
        {rightElement}
      </Block>
    </ContentPadding>
  </Block>
);

Header.BackButton = ({ onPress }) => (
  <TouchableOpacity
    accessibilityLabel={"Back"}
    onPress={onPress}
  >
    <ExpoIcon
      iconType="Ionicons"
      name="chevron-back-outline"
      size={24}
      backgroundColor='#383b38'
    />
  </TouchableOpacity>
);

export default Header;
