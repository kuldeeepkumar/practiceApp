import * as React from "react";

import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={containerStyle.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ backgroundColor: "pink" }}
      />
    </View>
  );
};

export default CustomSearchBar;
