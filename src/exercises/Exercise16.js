import { FlatList, Text, View } from "react-native";
import React from "react";
const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  // Add more items
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
//  How to Handle list

const Exercise16 = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Exercise16;
