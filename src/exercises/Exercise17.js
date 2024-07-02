import CustomFav, { AnimatedFav } from "../components/CustomFav";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CustomAvatar from "../components/CustomAvatar";
import CustomBadge from "../components/CustomBadge";
import CustomBanner from "../components/CustomBanner";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomChip from "../components/CutomChip";
import CustomDataTable from "../components/CustomDataTable";
import CustomDialog from "../components/CustomDialog";
import CustomDivider from "../components/CustomDivider";
import CustomHelperText from "../components/CustomHelperText";
import CustomIcons from "../components/CustomIcons";
import CustomList from "../components/CustomList";
import CustomMenu from "../components/CustomMenu";
import CustomModal from "../components/CustomModal";
import CustomPortal from "../components/CustomPortal";
import CustomProgressBar from "../components/CustomProgressBar";
import CustomRadioButton from "../components/CustomRadioButton";
import CustomSearchBar from "../components/CustomSearchBar";
import CustomSegmentButton from "../components/CustomSegmentButton";
import CustomSnackBar from "../components/CustomSnackBar";
import CustomSurfaceContainer from "../components/CustomSurfaceContainer";
import CustomSwitchButton from "../components/CustomSwitchButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import CustomToggleButton from "../components/CustomToggleButton";
import CustomTooltip from "../components/CustomTooltip";
import CustomTouchableRipple from "../components/CustomTouchableRipple";
import Loader from "../components/Loader";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/TopBar";
import { containerStyle } from "../styles";
import { createStackNavigator } from "@react-navigation/stack";

const Exercise17 = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"ComponentNavigation"}>
        <Stack.Screen name="ComponentNavigation" component={ComponentNames} />
        <Stack.Screen name="loader" component={Loader} />
        <Stack.Screen name="TopBar" component={TopBar} />
        <Stack.Screen name="Avatar" component={CustomAvatar} />
        <Stack.Screen name="Badge" component={CustomBadge} />
        <Stack.Screen name="Banner" component={CustomBanner} />
        <Stack.Screen name="Button" component={CustomButton} />
        <Stack.Screen name="Card" component={CustomCard} />
        <Stack.Screen name="Checkbox" component={CustomCheckbox} />
        <Stack.Screen name="Chip" component={CustomChip} />
        <Stack.Screen name="Datatable" component={CustomDataTable} />
        <Stack.Screen name="Dialog" component={CustomDialog} />
        <Stack.Screen name="Divider" component={CustomDivider} />
        <Stack.Screen name="Fav" component={CustomFav} />
        <Stack.Screen name="AnimatedFav" component={AnimatedFav} />
        <Stack.Screen name="Helpertext" component={CustomHelperText} />
        <Stack.Screen name="Icons" component={CustomIcons} />
        <Stack.Screen name="List" component={CustomList} />
        <Stack.Screen name="Menu" component={CustomMenu} />
        <Stack.Screen name="Modal" component={CustomModal} />
        <Stack.Screen name="Portal" component={CustomPortal} />
        <Stack.Screen name="Progressbar" component={CustomProgressBar} />
        <Stack.Screen name="Radio" component={CustomRadioButton} />
        <Stack.Screen name="Search" component={CustomSearchBar} />
        <Stack.Screen name="Segment" component={CustomSegmentButton} />
        <Stack.Screen name="Snack" component={CustomSnackBar} />
        <Stack.Screen name="Surface" component={CustomSurfaceContainer} />
        <Stack.Screen name="Switch" component={CustomSwitchButton} />
        <Stack.Screen name="Text" component={CustomText} />
        <Stack.Screen name="Textinput" component={CustomTextInput} />
        <Stack.Screen name="Togglebutton" component={CustomToggleButton} />
        <Stack.Screen name="Tooltip" component={CustomTooltip} />
        <Stack.Screen
          name="Touchableripple"
          component={CustomTouchableRipple}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Exercise17;

const ComponentNames = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 20,
                marginBottom: 30,
              }}>
              {" "}
              React Papper components
            </Text>
            <View style={[containerStyle.container, { gap: 5 }]}>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Tooltip")}>
                <Text style={{ fontWeight: 500 }}> 👉 Tooltip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Touchableripple")}>
                <Text style={{ fontWeight: 500 }}> 👉 Touchable Ripple</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("loader")}>
                <Text style={{ fontWeight: 500 }}> 👉 Activity Indicator</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("TopBar")}>
                <Text style={{ fontWeight: 500 }}> 👉 Topbar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Avatar")}>
                <Text style={{ fontWeight: 500 }}> 👉 Avatar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Badge")}>
                <Text style={{ fontWeight: 500 }}> 👉 Badge</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Banner")}>
                <Text style={{ fontWeight: 500 }}> 👉 Banner</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Button")}>
                <Text style={{ fontWeight: 500 }}> 👉 Button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Card")}>
                <Text style={{ fontWeight: 500 }}> 👉 Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Checkbox")}>
                <Text style={{ fontWeight: 500 }}> 👉 Checkbox</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Chip")}>
                <Text style={{ fontWeight: 500 }}> 👉 Chip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Datatable")}>
                <Text style={{ fontWeight: 500 }}> 👉 Data Table</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Dialog")}>
                <Text style={{ fontWeight: 500 }}> 👉 Dialog</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Divider")}>
                <Text style={{ fontWeight: 500 }}> 👉 Divider</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Fav")}>
                <Text style={{ fontWeight: 500 }}> 👉 Fav</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("AnimatedFav")}>
                <Text style={{ fontWeight: 500 }}> 👉 Animated Fav</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Helpertext")}>
                <Text style={{ fontWeight: 500 }}> 👉 Helper Text</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Icons")}>
                <Text style={{ fontWeight: 500 }}> 👉 Custom Icons</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("List")}>
                <Text style={{ fontWeight: 500 }}> 👉 List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Menu")}>
                <Text style={{ fontWeight: 500 }}> 👉 Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Modal")}>
                <Text style={{ fontWeight: 500 }}> 👉 Modal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Portal")}>
                <Text style={{ fontWeight: 500 }}> 👉 Portal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Progressbar")}>
                <Text style={{ fontWeight: 500 }}> 👉 Progress Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Radio")}>
                <Text style={{ fontWeight: 500 }}> 👉 Radio Button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Search")}>
                <Text style={{ fontWeight: 500 }}> 👉 Search Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Segment")}>
                <Text style={{ fontWeight: 500 }}> 👉 Segment Button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Snack")}>
                <Text style={{ fontWeight: 500 }}> 👉 Snack Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Surface")}>
                <Text style={{ fontWeight: 500 }}> 👉 Surface</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Switch")}>
                <Text style={{ fontWeight: 500 }}> 👉 Switch</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Text")}>
                <Text style={{ fontWeight: 500 }}> 👉 Text</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Textinput")}>
                <Text style={{ fontWeight: 500 }}> 👉 Text Input</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "cyan", padding: 15, width: 300 }}
                onPress={() => navigation.navigate("Togglebutton")}>
                <Text style={{ fontWeight: 500 }}> 👉 Toggle Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
