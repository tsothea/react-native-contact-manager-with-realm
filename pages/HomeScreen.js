import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";
// import SectionList from "../layout/SectionList";
import { SwipeListView } from "react-native-swipe-list-view";
import ListContacts from "../components/ListContacts";

const HomeScreen = (navigation) => {
  const state = useSelector((state) => state);
  const people = state.listPeople;
  return (
    <View style={Styles.container}>
      <ListContacts data={people} navigation={navigation.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    // alignItems: "center",
    // backgroundColor: "#CCC",
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // justifyContent: "center",
    // height: 150,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  backLeftBtnLeft: {
    backgroundColor: "#138496",
    left: 0,
  },
});

export default HomeScreen;
