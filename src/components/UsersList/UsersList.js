import React from "react";
import Card from "../../UI/Card/Card";
import { withRouter } from "react-router";

import * as classes from "./UsersList.module.scss";

const UsersList = (props) => {
  const { usersArr } = props;

  const cardClickHandler = (id) => {
    props.history.push(`/user-${id}`);
  };

  return (
    <div className={classes.UsersList}>
      {usersArr.map((user) => {
        const { id, name, email, username } = user;
        return (
          <Card
            key={id}
            cardClicked={() => cardClickHandler(id)}
            name={name}
            email={email}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default withRouter(UsersList);
