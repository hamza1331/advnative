import React from "react";
import { View, Text } from "react-native";

export default () => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      padding: 20
    }}
  >
    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
      Error: No landing page defined!
    </Text>
    ;
    <Text style={{ marginTop: 30 }}>
      To set a page as the landing page for your app, click the Settings icon in
      the lower left of the editor. Then, inside the Navigation tab, click 'Make
      this page the landing page'.
    </Text>
    ;
  </View>
);
