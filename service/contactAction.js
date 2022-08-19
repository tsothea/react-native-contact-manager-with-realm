import {
  REACT_APP_ADD_NEW_CONTACT,
  REACT_APP_EDIT_CONTACT,
  REACT_APP_DELETE_CONTACT,
} from "@env";

export const addNewContact = (params) => {
  return {
    type: REACT_APP_ADD_NEW_CONTACT,
    payload: { params: params },
  };
};

export const editContact = (key, params) => {
  return {
    type: REACT_APP_EDIT_CONTACT,
    payload: { key: key, params: params },
  };
};

export const forceDeleteContact = (key, params) => {
  return {
    type: REACT_APP_DELETE_CONTACT,
    payload: { key: key, params: params },
  };
};
