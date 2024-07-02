import { Divider, List, MD3Colors, Text } from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { containerStyle } from "../styles";

const CustomList = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={containerStyle.container}>
          <List.Section
            title="Accordions"
            style={{ width: "100%", paddingHorizontal: 20, gap: 10 }}>
            <List.Accordion
              title="Uncontrolled Accordion"
              left={(props) => <List.Icon {...props} icon="folder" />}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>

            <List.Accordion
              title="Controlled Accordion"
              left={(props) => <List.Icon {...props} icon="home" />}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={(props) => <List.Icon {...props} icon="camera" />}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
          <List.AccordionGroup>
            <List.Accordion
              style={{ width: 410, paddingHorizontal: 20 }}
              title="Accordion 1"
              id="1">
              <List.Item title="Item 1" />
            </List.Accordion>
            <List.Accordion
              style={{ width: 410, paddingHorizontal: 20 }}
              title="Accordion 2"
              id="2">
              <List.Item title="Item 2" />
            </List.Accordion>
            <View>
              <Text style={{ marginVertical: 50 }}>
                List.Accordion can be wrapped because implementation uses
                React.Context.
              </Text>
              <List.Accordion title="Accordion 3" id="3">
                <List.Item title="Item 3" />
              </List.Accordion>
            </View>
          </List.AccordionGroup>
          <List.Icon color={MD3Colors.tertiary70} icon="folder" />
          <List.Item
            title="First Item"
            description="Item description"
            left={(props) => <List.Icon {...props} icon="folder" />}
          />
          <List.Subheader>My List Title One</List.Subheader>
          <List.Subheader>My List Title Two</List.Subheader>
          <List.Subheader>My List Title Three</List.Subheader>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomList;
