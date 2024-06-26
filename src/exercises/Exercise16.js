import { FlatList, Text, View } from "react-native";

import React from "react";

const DATA = [
  { id: "1", title: "Item 100" },
  { id: "2", title: "Item 200" },
  { id: "3", title: "Item 300" },
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
