import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const getScreenSize = () => {
  const { width } = Dimensions.get("window");
  if (width >= 440) {
    return "large";
  } else if (width >= 360) {
    return "medium";
  }

  return "small";
};

const ScreenSizeProvider = (props) => {
  const [size, setSize] = useState(getScreenSize());

  const updateSize = () => {
    setSize(getScreenSize());
  };

  useEffect(() => {
    const unsubscribe = Dimensions.addEventListener("change", updateSize);
    // return () => unsubscribe();
  }, []);
  return props.children(size);
};

export default ScreenSizeProvider;
