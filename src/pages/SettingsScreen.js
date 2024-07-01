import { Button, StyleSheet, Text, View } from "react-native";
import { Card, Switch } from "react-native-elements";

import React from "react";

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = React.useState(false);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Settings</Card.Title>
        <Card.Divider />
        <View style={styles.setting}>
          <Text>Enable Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={(value) => setNotifications(value)}
          />
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </Card>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
