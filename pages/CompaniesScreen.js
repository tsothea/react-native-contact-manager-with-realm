import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Button,
} from "react-native";
import Styles from "../assets/style/Styles";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { addNewCompany, editCompany, removeCompany } from "../service";
import { SwipeListView } from "react-native-swipe-list-view";

const CompaniesScreen = (navigation) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [companyForm, setCompanyForm] = useState({});
  const state = useSelector((state) => state);
  const companies = state.companies;
  const dispatch = useDispatch();

  const updateFormValue = (values) => {
    const newFormData = { ...companyForm };
    Object.entries(values).forEach(([fieldName, value]) => {
      newFormData[fieldName] = value;
    });
    setCompanyForm(newFormData);
  };
  const SaveCompany = () => {
    if (companyForm["key"]) {
      editCompany(companyForm, dispatch);
    } else {
      addNewCompany(companyForm, dispatch);
    }

    setModalVisible(false);
  };
  const updateCompany = (item) => {
    setCompanyForm(item);
    setModalVisible(true);
  };
  const deleteCompany = (key) => {
    removeCompany(key, dispatch);
  };
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  return (
    <View>
      <SwipeListView
        data={companies}
        renderItem={(data) => {
          return (
            <TouchableOpacity onPress={() => updateCompany(data.item)}>
              <View style={[Styles.containerItem, styles.textLeft]}>
                <Text
                  style={{ textAlign: "left", justifyContent: "flex-start" }}
                >
                  {data.item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => closeRow(rowMap, data.item.key)}
            >
              <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => deleteCompany(data.item.key)}
            >
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
      />
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            position: "absolute",
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: "#fff",
            borderRadius: 100,
          }}
        >
          <Ionicons name="add" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ right: -140, top: 50, zIndex: 10002 }}>
            <Ionicons
              name="close"
              size={24}
              color="black"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <View style={styles.modalView}>
            <Text style={{ textAlign: "left" }}>Company Name : </Text>
            <TextInput
              name="name"
              value={companyForm.name ? companyForm.name : ""}
              onChangeText={(name) => updateFormValue({ name })}
              style={{
                borderWidth: 1,
                width: 250,
                borderRadius: 5,
                padding: 10,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Button title="Save" color="#841584" onPress={SaveCompany} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "baseline",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
  textLeft: {
    textAlign: "left",
  },
});

export default CompaniesScreen;
