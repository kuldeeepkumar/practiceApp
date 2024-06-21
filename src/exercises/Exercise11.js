import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
} from "react-native";

const Exercise11 = () => {
  const handlePress = () => {
    // Define what happens when the button is pressed
    alert("Reload the page and image will be change!!!!");
  };
  const handlepress = () => {
    alert("Booo🗿");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
      </TouchableOpacity>
      <Button title="Message" onPress={handlePress} />
      <Button title="warning" onPress={handlepress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20, // Added margin bottom to separate image and button
  },
});

export default Exercise11;
