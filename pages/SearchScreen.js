import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Styles from "../assets/style/Styles";
import ListContacts from "../components/ListContacts";

const SearchScreen = (navigation) => {
  const state = useSelector((state) => state);
  const people = state.people;

  return (
    <View style={Styles.container}>
      <ListContacts data={people} navigation={navigation.navigation} />
    </View>
  );
};

export default SearchScreen;
