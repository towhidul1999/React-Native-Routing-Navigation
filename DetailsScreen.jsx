import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>📄 Details Screen</Text>

      <Button
        title="Go to More Details"
        onPress={() => navigation.navigate("MoreDetails")}
      />
    </View>
  );
}

