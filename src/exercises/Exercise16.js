import { FlatList, Text, View } from "react-native";

import React from "react";

const DATA = [
  { id: "1", title: "Index 1" },
  { id: "2", title: "Index 2" },
  { id: "3", title: "Index 3" },
  { id: "4", title: "Index 4" },
  { id: "5", title: "Index 5" },
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
