import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { getPeople, getCompanies } from "./service";
import reducer from "./service/reducer";
import { createStore } from "redux";
import Nav from "./layout/Nav";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./pages/DetailScreen";
import SearchScreen from "./pages/SearchScreen";
import ContactFormScreen from "./pages/ContactFormScreen";
import Search from "./layout/Search";
import Realm from "realm";

const TaskSchema = {
  name: "Task1",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};

let task1, task2;
(async () => {
  const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

  // realm.write(() => {
  //   task1 = realm.create("Task1", {
  //     _id: 1,
  //     name: "go grocery shopping",
  //     status: "Open",
  //   });
  //   task2 = realm.create("Task1", {
  //     _id: 2,
  //     name: "go exercise",
  //     status: "Open",
  //   });
  //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
  // });

  // query realm for all instances of the "Task" type.
  const tasks = realm.objects("Task1");
  console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);
})();

const AppWrapper = () => {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPeople(dispatch);
    getCompanies(dispatch);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="menu"
          component={Nav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            headerTitle: "",
            headerRight: () => (
              <>
                <Search navigation={navigation} />
              </>
            ),
          })}
        />
        <Stack.Screen name="ContactForm" component={ContactFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWrapper;
