import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { SegmentedButtons } from "react-native-paper";

const CustomSegmentButton = () => {
  const [value, setValue] = useState("");
  console.log("value", value);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "walk",
            label: "Walking",
            icon: "walk",
          },
          {
            value: "train",
            label: "Transit",
            icon: "train",
          },
          { value: "drive", label: "Driving", icon: "car" },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomSegmentButton;
