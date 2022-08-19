import React from "react";
import { View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const HeaderBar = (props) => {
  return (
    <View
      style={{
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
      }}
    >
      <Feather
        name="search"
        size={22}
        color="black"
        style={{ marginRight: 5 }}
        onPress={() => props.navigation.navigation.navigate("Search")}
      />
      <AntDesign
        name="adduser"
        size={24}
        color="black"
        style={{ marginRight: 5 }}
        onPress={() => props.navigation.navigation.navigate("ContactForm")}
      />
    </View>
  );
};

export default HeaderBar;
