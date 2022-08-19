import React from "react";
import { View } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import ListContacts from "../components/ListContacts";

const ContactsScreen = (navigation) => {
  const state = useSelector((state) => state);
  const contacts = state.listPeople.filter((person) => person.isContact);
  return (
    <View style={Styles.container}>
      <ListContacts data={contacts} navigation={navigation.navigation} />
    </View>
  );
};

export default ContactsScreen;
