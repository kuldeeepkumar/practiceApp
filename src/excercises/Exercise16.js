import { FlatList, Text, View } from "react-native";

import React from "react";

const DATA = [
  { id: "1", title: "pooja" },
  { id: "2", title: "neha" },
  { id: "3", title: "raju" },
  // Add more items
];
const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

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
