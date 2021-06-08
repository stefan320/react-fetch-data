import * as classes from "./FullDetails.module.scss";
import React from "react";
import { connect } from "react-redux";

const FullDetails = (props) => {
  const selectedUserId = props.match.params.id;
  // Find the clicked user
  const selectedUserDetails = props.usersData.find(
    (user) => user.id === Number(selectedUserId)
  );

  console.log(selectedUserDetails);

  return <div className={classes.FullDetails}>avadad</div>;
};

const mapStateToProps = (state) => {
  const usersData = state;
  return usersData;
};

export default connect(mapStateToProps)(FullDetails);
