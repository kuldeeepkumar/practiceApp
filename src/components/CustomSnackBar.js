import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { Snackbar } from "react-native-paper";
import { containerStyle } from "../styles";

const CustomSnackBar = () => {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={containerStyle.container}>
      <Button
        title={visible ? "Hide" : "Show"}
        onPress={onToggleSnackBar}></Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "red",
  },
});

export default CustomSnackBar;
