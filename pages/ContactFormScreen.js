import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { saveNewContact, updateNewContact } from "../service";

const ContactFormScreen = (route) => {
  const dispatch = useDispatch();
  let item = route.route.params ? route.route.params.item : {};
  const [formContact, setFormContact] = useState(item);

  useLayoutEffect(() => {
    route.navigation.setOptions({
      title: item["name"],
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <Button title="Save" onPress={saveContact}></Button>
        </View>
      ),
    });
  });

  const saveContact = () => {
    if (formContact !== null && formContact.key !== undefined) {
      updateNewContact(formContact, dispatch);
    } else {
      saveNewContact(formContact, dispatch);
    }

    route.navigation.navigate("DetailScreen", {
      item: formContact,
    });
  };

  const updateFormValue = (values) => {
    const newFormData = { ...formContact };
    Object.entries(values).forEach(([fieldName, value]) => {
      newFormData[fieldName] = value;
    });
    setFormContact(newFormData);
  };

  const updateSocialFormValue = (values) => {
    const newFormData = { ...formContact };
    if (newFormData["social_networks"] === undefined) {
      newFormData["social_networks"] = {};
    }
    Object.entries(values).forEach(([fieldName, value]) => {
      newFormData["social_networks"][fieldName] = value;
    });
    setFormContact(newFormData);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          name="key"
          value={formContact.key ? formContact.key : ""}
          style={{ display: "none" }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            fieldName="name"
            value={formContact.name ? formContact.name : ""}
            underlineColorAndroid="transparent"
            onChangeText={(name) => updateFormValue({ name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="City"
            fieldName="city"
            value={formContact.city ? formContact.city : ""}
            underlineColorAndroid="transparent"
            onChangeText={(city) => updateFormValue({ city })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Avatar"
            fieldName="avatar"
            value={formContact.avatar ? formContact.avatar : ""}
            underlineColorAndroid="transparent"
            onChangeText={(avatar) => updateFormValue({ avatar })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Company"
            fieldName="company"
            value={formContact.company ? formContact.company : ""}
            underlineColorAndroid="transparent"
            onChangeText={(company) => updateFormValue({ company })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Position"
            fieldName="position"
            value={formContact.position ? formContact.position : ""}
            underlineColorAndroid="transparent"
            onChangeText={(position) => updateFormValue({ position })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Facebook"
            fieldName="facebook"
            value={
              formContact.social_networks
                ? formContact.social_networks.facebook
                : ""
            }
            underlineColorAndroid="transparent"
            onChangeText={(facebook) => updateSocialFormValue({ facebook })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Instagram"
            fieldName="instagram"
            value={
              formContact.social_networks
                ? formContact.social_networks.instagram
                : ""
            }
            underlineColorAndroid="transparent"
            onChangeText={(instagram) => updateSocialFormValue({ instagram })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Linkedin"
            fieldName="linkedin"
            value={
              formContact.social_networks
                ? formContact.social_networks.linkedin
                : ""
            }
            underlineColorAndroid="transparent"
            onChangeText={(linkedin) => updateSocialFormValue({ linkedin })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Skypse"
            fieldName="skypse"
            value={
              formContact.social_networks
                ? formContact.social_networks.skypse
                : ""
            }
            underlineColorAndroid="transparent"
            onChangeText={(skypse) => updateSocialFormValue({ skypse })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Twitter"
            fieldName="twitter"
            value={
              formContact.social_networks
                ? formContact.social_networks.twitter
                : ""
            }
            underlineColorAndroid="transparent"
            onChangeText={(twitter) => updateSocialFormValue({ twitter })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={saveContact}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    paddingTop: 20,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
  },
  sendButton: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: "white",
  },
});

export default ContactFormScreen;
