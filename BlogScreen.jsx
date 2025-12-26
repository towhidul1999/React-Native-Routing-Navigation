import React from "react";
import { View, Text, Button } from "react-native";

export default function BlogScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>📰 Blog Screen</Text>

                  <Button
                    title="Go to Info"
                    onPress={() => navigation.navigate("Info")}
                  />
    </View>
  );
}
