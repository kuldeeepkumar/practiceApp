import * as React from "react";

import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({ navigation }) => {
  const _goBack = () => {
    navigation.navigate("ComponentNavigation");
  };

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;