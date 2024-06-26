import { Button, StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-elements";
import React from "react";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Details Screen</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>This is the details screen.</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
  },
});

export default DetailsScreen;
