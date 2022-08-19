import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { filterPeople } from "../service/actions";

const Search = (props) => {
  const dispatch = useDispatch();
  const dosearch = (text) => {
    dispatch(filterPeople(text));
  };

  useEffect(() => {
    dispatch(filterPeople(""));
  });

  return (
    <View style={{ marginRight: 20, flexDirection: "row" }}>
      <TextInput
        placeholder="Search"
        style={{
          width: 250,
          borderWidth: 1,
          borderColor: "#999999",
          padding: 5,
        }}
        onChangeText={(text) => dosearch(text)}
      />
      <Button
        title="Cancel"
        style={{ width: 80 }}
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

export default Search;
