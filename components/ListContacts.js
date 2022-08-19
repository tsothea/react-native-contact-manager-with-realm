import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import { forceRemoveContact } from "../service";

const ListContacts = (props) => {
  const dispatch = useDispatch();
  let people = props.data;
  let navigation = props.navigation;
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteContact = (key) => {
    forceRemoveContact(key, dispatch);
  };

  return (
    <>
      <SwipeListView
        data={people}
        renderItem={(data, rowMap) => {
          return (
            <View>
              <Contact item={data.item} navigation={navigation} />
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backLeftBtnLeft]}
              onPress={() =>
                navigation.navigate("ContactForm", { item: data.item })
              }
            >
              <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => closeRow(rowMap, data.item.key)}
            >
              <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => deleteContact(data.item.key)}
            >
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
      />
    </>
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

export default ListContacts;
