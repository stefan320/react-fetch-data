import React from "react";
import Card from "../../UI/Card/Card";

import * as classes from "./UsersList.module.scss";

const UsersList = (props) => {
  const { usersArr } = props;
  return (
    <div className={classes.UsersList}>
      {usersArr.map((user) => {
        const { id, name, email, username } = user;
        return <Card key={id} name={name} email={email} username={username} />;
      })}
    </div>
  );
};

export default UsersList;
