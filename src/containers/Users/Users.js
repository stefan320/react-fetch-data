import React, { useEffect } from "react";
import * as actionCreators from "../../store/actions/usersActions";

import { connect } from "react-redux";

import * as classes from "./Users.module.scss";
import UsersList from "../../components/UsersList/UsersList";

const Users = (props) => {
  const { usersData } = props;

  useEffect(() => {
    props.loadUsers();
  }, []);

  return (
    <div className={classes.Users}>
      <UsersList usersArr={props.usersData} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { usersData } = state;
  return { usersData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => actionCreators.fetchUsersData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
