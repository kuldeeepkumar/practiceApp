import {
  Button,
  Modal,
  PaperProvider,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import { TextInputBase, View } from "react-native";

import React from "react";
import { containerStyle } from "../styles";

const CustomModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const container = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          style={{ alignItems: "center" }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={container}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
          <TextInput
            placeholder="Enter old password"
            style={{ height: 50, marginVertical: 10, borderRadius: 10 }}
          />
          <TextInput
            placeholder="Enter new password"
            style={{ height: 50, marginVertical: 10, borderRadius: 10 }}
          />
          <View style={{ alignItems: "center" }}>
            <Button
              buttonColor="red"
              textColor="white"
              style={{ width: 100, justifyContent: "center" }}>
              Submit
            </Button>
          </View>
        </Modal>
      </Portal>
      <Button
        style={{
          marginTop: 50,
        }}
        onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};

export default CustomModal;
