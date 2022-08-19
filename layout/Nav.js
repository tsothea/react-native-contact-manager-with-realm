import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HomeScreen from "../pages/HomeScreen";
import FavoritesScreen from "../pages/FavoritesScreen";
import ContactsScreen from "../pages/ContactsScreen";
import PeopleScreen from "../pages/PeopleScreen";
import CompaniesScreen from "../pages/CompaniesScreen";
import SettingScreen from "../pages/SettingScreen";
import LogoutScreen from "../pages/LogoutScreen";
import CustomSidebarMenu from "../layout/CustomSidebarMenu";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HeaderBar from "./HeaderBar";

const Drawer = createDrawerNavigator();

const Nav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={({ navigation }) => ({
          drawerLabel: "Home",
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Contacts"
        options={({ navigation }) => ({
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={ContactsScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={({ navigation }) => ({
          drawerIcon: () => <AntDesign name="star" size={24} color="black" />,
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={FavoritesScreen}
      />
      <Drawer.Screen
        name="People"
        options={({ navigation }) => ({
          drawerIcon: () => <AntDesign name="team" size={24} color="black" />,
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={PeopleScreen}
      />
      <Drawer.Screen
        name="Companies"
        options={({ navigation }) => ({
          drawerIcon: () => <Entypo name="landline" size={24} color="black" />,
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={CompaniesScreen}
      />
      <Drawer.Screen
        name="Setting"
        options={({ navigation }) => ({
          drawerIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
          headerRight: () => (
            <View>
              <HeaderBar navigation={{ navigation }} />
            </View>
          ),
        })}
        component={SettingScreen}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerIcon: () => (
            <AntDesign name="poweroff" size={24} color="black" />
          ),
          drawerLabel: "Logout",
        }}
        component={LogoutScreen}
      />
    </Drawer.Navigator>
  );
};

export default Nav;
