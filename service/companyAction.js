import {
  REACT_APP_GET_COMPANIES,
  REACT_APP_ADD_COMPANY,
  REACT_APP_DELETE_COMPANY,
  REACT_APP_EDIT_COMPANY,
} from "@env";

export const fetchCompanies = (companies) => {
  return {
    type: REACT_APP_GET_COMPANIES,
    payload: { companies: companies },
  };
};

export const addCompany = (company) => {
  return {
    type: REACT_APP_ADD_COMPANY,
    payload: { company: company },
  };
};

export const updateCompany = (company) => {
  return {
    type: REACT_APP_EDIT_COMPANY,
    payload: { company: company },
  };
};

export const deleteCompany = (key) => {
  return {
    type: REACT_APP_DELETE_COMPANY,
    payload: { key: key },
  };
};
