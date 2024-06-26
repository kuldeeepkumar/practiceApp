import { FlatList, Text, View } from "react-native";
import React from "react";
import { containerStyle } from "../styles";
const DATA = [
  { id: "1", title: "apple" },
  { id: "2", title: "Mango" },
  { id: "3", title: "cherry" },
  { id: "4", title: "cherry" },
  { id: "5", title: "cherry" },
  { id: "6", title: "cherry" },
  { id: "7", title: "cherry" },
  { id: "8", title: "cherry" },
  { id: "9", title: "cherry" },
  // Add more items
];

const Item = ({ title }) => (
  <View
    style={{
      borderWidth: 3,
      borderColor: "red",
      marginVertical: 5,
      width: 250,
    }}
  >
    <Text
      style={{
        fontSize: 20,
        textAlign: "center",
      }}
    >
      👉 {title} 👈
    </Text>
  </View>
);
//  How to Handle list

const Exercise16 = () => {
  return (
    <View style={containerStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        centerContent
      />
    </View>
  );
};

export default Exercise16;
