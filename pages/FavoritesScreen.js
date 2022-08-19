import React from "react";
import { View } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import ListContacts from "../components/ListContacts";

const FavoritesScreen = (navigation) => {
  const state = useSelector((state) => state);
  const favorites = state.listPeople.filter((person) => person.isFavourite);
  return (
    <View style={Styles.container}>
      <ListContacts data={favorites} navigation={navigation.navigation} />
    </View>
  );
};

export default FavoritesScreen;
