import React from "react";
import { View, Image, Text } from "react-native";
import Styles from "../assets/style/Styles";

function Profile() {
  return (
    <View
      style={{
        textAlign: "center",
      }}
    >
      <Image
        source={require("../assets/images/profile.jpg")}
        style={Styles.sideMenuProfileIcon}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          paddingBottom: 5,
        }}
      >
        John Doe
      </Text>
      <Text
        style={{
          textAlign: "center",
          borderBottomWidth: 1,
          fontWeight: "bold",
          borderBottomColor: "#ddd",
          paddingBottom: 10,
        }}
      >
        SunScript, CEO
      </Text>
    </View>
  );
}

export default Profile;
