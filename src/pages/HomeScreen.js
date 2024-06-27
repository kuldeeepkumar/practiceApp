import { Button, StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-elements";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Welcome to the Home Screen</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>This is the home screen of our app.</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
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

export default HomeScreen;
