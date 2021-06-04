import axios from "axios";
import * as actionTypes from "../actionTypes";

const getUsers = (users) => {
  return {
    type: actionTypes.GET_USERS,
    users,
  };
};

export const fetchUsersData = (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return dispatch(getUsers(res.data));
  });
};
