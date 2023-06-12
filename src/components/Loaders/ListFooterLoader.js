import { memo } from "react";
import { ActivityIndicator } from "react-native";

import useTheme from "../../hooks/useTheme";
import Block from "../Block";
import Text from "../Text";

function ListFooterLoader({ loading = false }) {
  const { sizes } = useTheme();

  return (
    <Block align="center">
      <Text black center h6 style={{ marginBottom: sizes.md }}>
        {loading ?  (
          <ActivityIndicator size={"small"} />
        ) : ( "End of result" )}
      </Text>
    </Block>
  )
}

export default memo(ListFooterLoader);