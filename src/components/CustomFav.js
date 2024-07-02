import {
  Animated,
  I18nManager,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { FAB, PaperProvider, Portal } from "react-native-paper";
import React, { useState } from "react";

import { AnimatedFAB } from "react-native-paper";
import { containerStyle } from "../styles";

const CustomFav = () => {
  const [visible, setVisible] = useState(false);
  console.log("visible", visible);
  return (
    <>
      <FAB
        size="small"
        icon="plus"
        style={styles.fab}
        onPress={() => {
          if (visible === true) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
        loading={visible ? true : false}
      />
      {visible && (
        <>
          <FAB
            size="small"
            icon="pen"
            style={styles.fab1}
            onPress={() => console.log("Pressed")}
          />
          <FAB
            size="small"
            icon="home"
            style={styles.fab2}
            onPress={() => console.log("Pressed")}
          />
        </>
      )}
    </>
  );
};

export default CustomFav;

export const AnimatedFav = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "calendar-today" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Email",
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fab1: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 50,
  },
  fab2: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 100,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});
