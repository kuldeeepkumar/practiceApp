import { FlatList, Text, View } from "react-native";

import React from "react";

const DATA = [
  { id: "1", title: "aashi" },
  { id: "2", title: "raman" },
  { id: "3", title: "nav" },
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