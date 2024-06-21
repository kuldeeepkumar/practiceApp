import {
  Image,
  StyleSheet,
  TouchableHighlightBase,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/id/902155732/photo/mixed-flower-bouquet.jpg?s=2048x2048&w=is&k=20&c=eRB_M35lubC8g4HF6AXF_gOsX2RxC4fQDg17iqvUWEI=",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU=",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1579136455288-1ddbfc118531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ---->>>>>>>>>>> Styling images and multimedia components <<<<<<<<<<<<<-----

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
});

export default Exercise11;
