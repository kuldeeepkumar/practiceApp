import { Button, StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-elements";
import React from "react";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>About Screen</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>This is the about screen.</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </Card>
    </View>
  );
};

export default AboutScreen;

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
