import React from "react";
import { SafeAreaView, Text, Linking } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Profile from "./Profile";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{ fontSize: 16, textAlign: "center", color: "grey" }}
        onPress={() => {
          Linking.openURL("https://www.vodworks.com");
        }}
      >
        www.vodworks.com
      </Text>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
