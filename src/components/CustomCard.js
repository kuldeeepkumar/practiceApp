import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import React from "react";
import { containerStyle } from "../styles";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CustomCard = () => {
  return (
    <SafeAreaView style={[containerStyle.container, { marginTop: 50 }]}>
      <ScrollView style={{ width: "100%", padding: 20 }}>
        <Card
          mode="contained"
          style={{
            width: "100%",
            paddingHorizontal: 30,
            marginVertical: 15,
          }}>
          <Card.Title
            style={{ gap: 1 }}
            title="User 1"
            subtitle="Suggested for you"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card
          mode="elevated"
          style={{
            width: "100%",
            paddingHorizontal: 30,
            marginVertical: 15,
          }}>
          <Card.Title
            style={{ gap: 1 }}
            title="User 1"
            subtitle="Suggested for you"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card
          mode="outlined"
          style={{
            width: "100%",

            marginVertical: 15,
          }}>
          <Card.Title
            style={{ gap: 1 }}
            title="User 1"
            subtitle="Suggested for you"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover
            style={{ marginHorizontal: 30, backgroundColor: "white" }}
            source={{ uri: "https://picsum.photos/700" }}
          />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomCard;

const styles = StyleSheet.create({});