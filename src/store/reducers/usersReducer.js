import * as actionTypes from "../actionTypes";

const users = {
  usersData: [],
};

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        usersData: action.users,
      };
    default:
      return state;
  }
};

export default usersReducer;
