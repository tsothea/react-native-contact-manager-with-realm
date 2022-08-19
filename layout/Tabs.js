import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import SearchScreen from "../pages/SearchScreen";
import SettingScreen from "../pages/SettingScreen";
import ContactFormScreen from "../pages/ContactFormScreen";
import CompaniesScreen from "../pages/CompaniesScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backGroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <AntDesign name="home" size={24} color="black" />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen name="Company" component={CompaniesScreen}></Tab.Screen>
      <Tab.Screen
        name="AddContact"
        component={ContactFormScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      ></Tab.Screen>
      <Tab.Screen name="Setting" component={SettingScreen}></Tab.Screen>
      <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
