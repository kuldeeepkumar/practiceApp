import { Avatar, Card } from "react-native-elements";
import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
        />
        <Card.Title>John Doe</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>This is the profile screen.</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
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
export default ProfileScreen;
