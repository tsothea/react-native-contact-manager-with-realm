import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  img: {
    width: 100,
    height: 100,
  },
  containerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderBottomColor: "#ccc",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  rightContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "left",
  },
  position: {
    textAlign: "left",
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF",
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Styles;
