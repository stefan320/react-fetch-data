import React from "react";

import * as classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Card__section}>
        <h4 className={classes.Card__heading}>Name:&nbsp;</h4>
        <span className={classes.Card__span}>{props.name}</span>
      </div>
      <div className={classes.Card__section}>
        <h4 className={classes.Card__heading}>Username:&nbsp;</h4>
        <span className={classes.Card__span}>{props.username}</span>
      </div>
      <div className={classes.Card__section}>
        <h4 className={classes.Card__heading}>Email:&nbsp;</h4>
        <span className={classes.Card__span}>{props.email}</span>
      </div>
    </div>
  );
};

export default Card;
