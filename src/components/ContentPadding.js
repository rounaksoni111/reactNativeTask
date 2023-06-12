// @flow
import React from "react";
import { View } from "react-native";
import ScreenSizeProvider from "./ScreenSizeProvider";

const defaultPadding = {
  small: { horizontal: 8, vertical: 0 },
  medium: { horizontal: 16, vertical: 0 },
  large: { horizontal: 0, vertical: 0 }
};

const paddingStyle = (size, padding) => {
  const selectedPadding = (padding || {})[size] || defaultPadding[size];
  return {
    paddingHorizontal: selectedPadding.horizontal,
    paddingVertical: selectedPadding.vertical
  };
};

const ContentPadding = ({ children, padding, style }) => (
  <ScreenSizeProvider>
    {size => (
      <View style={[paddingStyle(size, padding), style]}>{children}</View>
    )}
  </ScreenSizeProvider>
);

ContentPadding.defaultProps = {
  padding: {},
  style: {}
};

const getContentPadding = paddingStyle;
export {
  ContentPadding, getContentPadding
};
