import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../assets/style/Styles";

const Contact = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("DetailScreen", {
          item: props.item,
        });
      }}
    >
      <View style={Styles.containerItem}>
        <Image source={{ uri: props.item.avatar }} style={Styles.thumbnail} />
        <View style={Styles.rightContainer}>
          <Text style={Styles.title}>{props.item.name}</Text>
          <Text style={Styles.position}>
            {props.item.company}, {props.item.position}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
