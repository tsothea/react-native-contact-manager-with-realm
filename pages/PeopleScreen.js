import React from "react";
import { View } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import ListContacts from "../components/ListContacts";

const PeopleScreen = (navigation) => {
  const state = useSelector((state) => state);
  const people = state.listPeople;
  return (
    <View style={Styles.container}>
      <ListContacts data={people} navigation={navigation.navigation} />
    </View>
  );
};

export default PeopleScreen;
